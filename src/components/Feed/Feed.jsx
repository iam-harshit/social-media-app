import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";
import FeedHeader from "./FeedHeader";
import FeedBody from "./FeedBody";
import { useNavigate } from "react-router-dom";

const Feed = ({user}) => {
  const [profile, setProfile] = useState({
    name: user?.name,
    avatar: user?.photoURL,
  });   
  const [feeds, setFeeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, `users/${user.uid}`);
    const postsRef = ref(db, "posts");

    const unsubscribeProfile = onValue(profileRef, (snapshot) => {
      const profileData = snapshot.val();
      setProfile({
        name: profileData?.name || user?.name,
        avatar: profileData?.photoURL || user?.photoURL,
      });
    });

    const unsubscribePosts = onValue(postsRef, async (snapshot) => {
      const postsData = snapshot.val();
      if (postsData) {
        const allPosts = await Promise.all(
        Object.entries(postsData).flatMap(([uid, userPosts]) =>
            Object.entries(userPosts).map(async ([postId, post]) => {
              // Fetch user profile for each post owner
              const userProfileRef = ref(db, `users/${uid}`);
              const userProfileSnapshot = await new Promise((resolve) =>
                onValue(userProfileRef, resolve, { onlyOnce: true })
              );
              const userProfile = userProfileSnapshot.val();

              return {
                ...post,
                postId,
                timestamp: post.timestamp ? post.timestamp : Date.now(),
                user: {
                  uid,
                  name: userProfile?.name || "Anonymous",
                  avatar: userProfile?.photoURL || "https://via.placeholder.com/40",
                },
              };
            })
          )
        );

        // Sort: logged-in user's posts first
        const sortedPosts = allPosts.sort((a, b) => {
          if (a.user.uid === user.uid) return -1;
          if (b.user.uid === user.uid) return 1;
          return b.timestamp - a.timestamp;
        });

        setFeeds(sortedPosts);
      }
    });

    return () => {
      unsubscribeProfile();
      unsubscribePosts();
    };
  }, [user]);

  const handleLike = (postId, postOwnerUid) => {
    const db = getDatabase();
    const postRef = ref(db, `posts/${postOwnerUid}/${postId}`);

    // Increment likes in the database
    update(postRef, {
      likes: feeds.find((post) => post.id === postId)?.likes + 1 || 1,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <FeedHeader profile={profile} />
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      <FeedBody feeds={feeds} onLike={(postId, postOwnerUid) => handleLike(postId, postOwnerUid)} />
      <div className="flex flex-col flex-1 self-end text-white">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/e2a20d0a30b2ffd49557d3399558c76dc01ff146e4f6c8f1f94a3b6f121ed802?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt="create post"
            className="object-contain self-end aspect-square w-[50px] cursor-pointer"
            onClick={() => navigate("/createpost")}
        />
        </div>
    </div>
  );
};

export default Feed;
