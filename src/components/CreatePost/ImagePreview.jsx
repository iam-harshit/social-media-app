import ImageCounter from "./ImageCounter";

const ImagePreview = ({
  mediaList,
  currentIndex,
  onNext,
  onPrevious,
  onAddMedia,
}) => {
  const currentMedia = mediaList[currentIndex]?.previewUrl;

  return (
    <div className="flex flex-col items-center mt-6 w-full">
      <div className="relative flex items-center justify-center w-full max-w-[280px] aspect-[0.982] rounded-xl overflow-hidden">
        {currentMedia && (
          <img
            src={currentMedia}
            alt={`Media ${currentIndex + 1}`}
            className="object-cover w-full h-full"
          />
        )}
        <ImageCounter current={currentIndex + 1} total={mediaList.length} />
      </div>

      <div className="flex items-center justify-between w-full max-w-[280px] mt-4 mb-8">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          className="flex items-center justify-center px-3 py-2 text-white font-bold text-lg bg-black rounded-full"
          aria-label="Previous"
          title="Previous"
        >
          &lt;
        </button>

        {/* Add Media Button */}
        <label
          className="flex items-center justify-center px-3 py-2 text-white font-bold text-lg bg-black rounded-full cursor-pointer"
          aria-label="Add Media"
          title="Add more"
        >
          <input
            type="file"
            accept="image/*,video/*"
            onChange={onAddMedia}
            className="hidden"
          />
          +
        </label>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="flex flex-col items-center justify-center px-3 py-2 text-white font-bold text-lg bg-black rounded-full"
          aria-label="Next"
          title="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;