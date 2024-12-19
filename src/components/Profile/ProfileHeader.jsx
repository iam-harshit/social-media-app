import { HiPencil } from "react-icons/hi";

const ProfileHeader = ({coverImage, isEditMode, onCoverImageChange}) => {
  return (
    <>
      <img
        loading="lazy"
        src={coverImage || "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/93cc626197dce26513fcf0144173648a7eaf5bc92ed23cd2b8e9776b756a037d?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"}
        alt="Cover Image"
        className="object-cover absolute inset-0 size-full rounded-bl-xl rounded-br-xl"
      />
      {isEditMode && (
          <label
          htmlFor="coverImage"
          className="absolute bottom-1 right-4 p-2 bg-gray-300 rounded-full cursor-pointer"
        >
          <input
            type="file"
            id="coverImage"
            className="hidden"
            onChange={onCoverImageChange}
          />
          <HiPencil color="white" />
          {/* <span className="text-white text-xl">✏️</span> */}
        </label>
      )}
      {!isEditMode ? (
        <>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/dd3353147bc95bc02208008695baa1c89b021785a59b2ae6228f495d7c19bd64?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt="Back Button"
            className="object-contain z-10 w-8 aspect-square cursor-pointer"
          />
        </>
      ): (
        <div className="flex">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/dd3353147bc95bc02208008695baa1c89b021785a59b2ae6228f495d7c19bd64?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt="Back Button"
            className="object-contain z-10 w-8 aspect-square cursor-pointer"
          />
          <span className="text-white text-lg font-bold pl-2 z-10">Edit Profile</span>
        </div>
      )};
    </>
  );
}

export default ProfileHeader;