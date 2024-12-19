import { useNavigate } from "react-router-dom";
import { logout } from "../../services/Auth";
import PostCard from "./PostCard";
import ProfileCard from "./ProfileCard";
import Button from "../Common/Button";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadString, getDownloadURL } from "firebase/storage";
import InputField from "../Common/InputField";

const posts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/45c61e67af19ee75adfaa86d7ae991cb018c0b111fcfbc8b9a3b3826a2d1d616?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    title: "Design meet",
    likes: 67,
    likeIcon: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/9c0148e3767c4d5692899fae95ba824321fdf37906228d21e0ffd04a3e127e0b?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/8d6e753d9f9076dbbe635d2b45869c4d54bc0444e6ffef8417deb896e8b79fe6?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    title: "Parachute ❤️",
    likes: 65,
    likeIcon: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/9c0148e3767c4d5692899fae95ba824321fdf37906228d21e0ffd04a3e127e0b?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/36d8287d57cabd54e6c7d20868884b65d52e60fc6fc65d26ca751a5b2225b48e?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    title: "Working on a B2B...",
    likes: 40,
    likeIcon: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/899d30c86095925a3a5b2a3ba42783e79eeee52885e6f5865964fc10f2037ab5?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
  }
];

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: user.name,
    bio: user.bio,
    photoURL: user.photoURL,
    coverImage: user.coverImage,
  });
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [newCoverImage, setNewCoverImage] = useState(null);

  const handleLogoutOrSave = async () => {
    if (isEditMode) {
      try {
        const db = getDatabase();
        const storage = getStorage();

        // Upload new profile image if available
        if (newProfileImage) {
          const profileImageRef = storageRef(storage, `users/${user.uid}/profileImage`);
          await uploadString(profileImageRef, newProfileImage, "data_url");
          const profileImageURL = await getDownloadURL(profileImageRef);
          editedProfile.photoURL = profileImageURL;
        }

        // Upload new cover image if available
        if (newCoverImage) {
          const coverImageRef = storageRef(storage, `users/${user.uid}/coverImage`);
          await uploadString(coverImageRef, newCoverImage, "data_url");
          const coverImageURL = await getDownloadURL(coverImageRef);
          editedProfile.coverImage = coverImageURL;
        }

        await set(ref(db, `users/${user.uid}`), editedProfile);
        console.log("Profile updated successfully!");
        setIsEditMode(false);
        setNewProfileImage(null);
        setNewCoverImage(null);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    } else {
      // Logout
      try {
        await logout();
        console.log("Successfully logged out!");
        navigate("/");
      } catch (error) {
        console.error("Logout failed", error);
      }
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
      const base64String = reader.result;
      setNewProfileImage(base64String);
    };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
      const base64String = reader.result;
      setNewCoverImage(base64String);
    };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatePostClick = () => {
    navigate("/createpost");
  };

  return (
    <main className="flex overflow-hidden flex-col pb-5 mx-auto bg-white max-w-[360px] min-h-screen">
      <ProfileCard editedProfile={editedProfile} onEditClick={handleEditClick} isEditMode={isEditMode} onProfileImageChange={handleProfileImageChange}
        onCoverImageChange={handleCoverImageChange}
        newProfileImage={newProfileImage}
        newCoverImage={newCoverImage} />
      {isEditMode ? (
        // Edit Mode UI
        <section className="flex flex-col px-4 mt-5 w-full max-w-md mx-auto">
          {/* Name */}
          <div className="relative">
            <InputField
              id="name"
              label="Name"
              name="name"
              value={editedProfile.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
             />
          </div>

          {/* Bio */}
          <div className="relative mt-4">
            <InputField
              id="bio"
              label="Bio"
              name="bio"
              value={editedProfile.bio}
              onChange={handleInputChange}
              placeholder="Enter your Bio"
            />
          </div>
        </section>
      ) : (
        // View Mode UI
        <section className="flex flex-col px-4 mt-5 w-full">
          <h1 className="self-start text-2xl font-extrabold text-black">
            {editedProfile.name}
          </h1>
          <p className="mt-2.5 text-sm text-black">{editedProfile.bio}</p>
          <div className="flex gap-3 mt-6 font-semibold">
            <div className="flex flex-col flex-1">
              <h2 className="self-start text-lg text-black">My Posts</h2>
              {posts.slice(0, 2).map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
            <div className="flex flex-col flex-1 self-end mt-8 text-white">
              <PostCard {...posts[2]} />
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/e2a20d0a30b2ffd49557d3399558c76dc01ff146e4f6c8f1f94a3b6f121ed802?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
              alt="create post"
              className="object-contain self-end mt-32 aspect-square w-[50px] cursor-pointer"
              onClick={handleCreatePostClick}
            />
            </div>
          </div>
        </section>
      )}
      <div className="flex-grow"></div>
        <Button
        buttonText={isEditMode ? "Save" : "Logout"}
        clickHandler={handleLogoutOrSave}
      />
    </main>
  );
};

export default Profile;