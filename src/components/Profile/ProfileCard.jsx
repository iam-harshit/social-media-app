import ProfileImage from "./ProfileImage";
import ProfileHeader from "./ProfileHeader";

const ProfileCard = ({editedProfile, onEditClick, isEditMode, 
  onProfileImageChange,
  onCoverImageChange,
  newProfileImage,
  newCoverImage
 }) => {
  return (
    <main className="flex flex-col pb-14 rounded-none max-w-[360px]">
      <section className="flex relative flex-col items-start pt-6 pr-20 pl-4 w-full rounded-3xl aspect-[2.222]">
        <ProfileHeader coverImage={newCoverImage || editedProfile.coverImage} isEditMode={isEditMode} onCoverImageChange={onCoverImageChange}/>
        <ProfileImage photoURL={newProfileImage || editedProfile.photoURL} onEditClick={onEditClick} isEditMode={isEditMode} onProfileImageChange={onProfileImageChange}/>
      </section>
    </main>
  );
};

export default ProfileCard;