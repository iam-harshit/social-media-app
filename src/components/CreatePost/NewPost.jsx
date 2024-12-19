import { useState, useEffect } from "react";
import ImagePreview from "./ImagePreview";
import Button from "../Common/Button";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, push } from "firebase/database";
import { storage, database } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const NewPost = ({userId}) => {
  const [mediaList, setMediaList] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [caption, setCaption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setMediaList((prev) => [...prev, { file, previewUrl }]);
      setCurrentMediaIndex(mediaList.length);
    }
  };

  const handleNextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePreviousMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? mediaList.length - 1 : prev - 1
    );
  };

  const handleCreatePost = async () => {
    if (!mediaList.length || !caption.trim()) {
      alert("Please add media and a caption.");
      return;
    }

    setIsLoading(true);

    try {
      // Upload media files to Firebase Storage
      const mediaUrls = await Promise.all(
        mediaList.map(async (media, index) => {
          const fileRef = storageRef(storage, `users/${userId}/posts/${Date.now()}_${index}`);
          await uploadBytes(fileRef, media.file);
          return await getDownloadURL(fileRef);
        })
      );

      // Save post data to Firebase Realtime Database
      const postRef = databaseRef(database, `posts/${userId}`);
      await push(postRef, {
        caption,
        mediaUrls,
        timestamp: Date.now(),
      });
      setMediaList([]);
      setCaption("");
      navigate("/feed");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      mediaList.forEach((media) => URL.revokeObjectURL(media.previewUrl));
    };
  }, [mediaList]);

  return (
    <main className="flex overflow-hidden flex-col items-center pt-6 pb-11 mx-auto text-black bg-white max-w-[360px] min-h-screen">
      <section className="flex flex-col self-stretch pr-10 pl-4 w-full">
        <header className="flex gap-3.5 self-start text-xl font-extrabold">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/53947b7fcf1f75bab2d2eea94a6c2c7076e1d33f429aef04d900095237f39f30?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <h1>New post</h1>
        </header>
        {mediaList.length === 0 ? (
           <div className="flex flex-col items-center justify-center px-4 py-6 mt-6 border-2 border-dashed border-gray-300 rounded-lg">
            <label
              className="flex items-center justify-center cursor-pointer"
            >
              <span className="text-gray-500 font-semibold">Select photos/videos</span>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={handleMediaChange}
              />
            </label>
          </div>
        ) : (
          <ImagePreview
            mediaList={mediaList}
            currentIndex={currentMediaIndex}
            onNext={handleNextMedia}
            onPrevious={handlePreviousMedia}
            onAddMedia={handleMediaChange}
          />
        )}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What`s on your mind?"
          className="w-full px-3 py-2 mt-4 border border-gray-300 rounded-md resize-none"
          rows={3}
        ></textarea>
      </section>
      <div className="flex-grow"></div>
      <Button buttonText={isLoading ? "Creating..." : "Create"} clickHandler={handleCreatePost}/>
    </main>
  );
}

export default NewPost;