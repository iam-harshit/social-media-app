const PostCard = ({ image, title, likes, likeIcon }) => {
  return (
    <div className="flex relative flex-col py-3 mt-3 rounded-xl aspect-[0.823] w-[158px]">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start pr-8 pl-3 mt-28 w-full text-white">
        <div className="text-sm">{title}</div>
        <div className="flex gap-0.5 mt-1.5 text-xs whitespace-nowrap">
          <img
            loading="lazy"
            src={likeIcon}
            alt=""
            className="object-contain shrink-0 w-full aspect-square"
          />
          <div className="m-auto">{likes}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;