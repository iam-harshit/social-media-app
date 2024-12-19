import { HiPencil } from "react-icons/hi";

const ProfileImage = ({ photoURL, onEditClick, isEditMode, onProfileImageChange }) => {

  return (
    <div className={`relative z-10 ${isEditMode ? `top-14`: `top-24`}`}>
      <img
        loading="lazy"
        src={photoURL}
        alt="Profile avatar"
        className="object-cover mb-0 w-28 max-w-full rounded-full aspect-square"
      />
      {!isEditMode ? (
        <button
          onClick={onEditClick}
          className="relative -top-10 right-[-130px] gap-2.5 px-4 py-2.5 border border-solid border-black border-opacity-30 min-w-[210px] min-h-[32px] rounded-[36px] font-bold"
          aria-label="Edit Profile"
        >
          Edit Profile
        </button>
      ): (
        <div className="absolute bottom-0 right-0 bg-gray-300 p-2 rounded-full">
          <label htmlFor="profileImage" className="cursor-pointer">
            <HiPencil color="white"/>
          </label>
          <input
            id="profileImage"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onProfileImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;