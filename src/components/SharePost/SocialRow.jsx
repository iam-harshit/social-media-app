const SocialRow = ({ imageSrc, items, className }) => {
  return (
    <>
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className={`object-contain aspect-[5.13] w-[287px] ${className}`}
      />
      <div className="flex gap-7 self-center mt-2 whitespace-nowrap">
        {items.map((item, index) => (
          <div
            key={index}
            className={`text-center ${item.grow ? "grow" : ""}`}
            role="button"
            tabIndex={0}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default SocialRow;