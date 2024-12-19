const ImageCounter = ({ current, total }) => {
  return (
    <div className="absolute top-2 right-2 px-2 py-1 bg-white text-black font-semibold rounded-full">
      {current}/{total}
    </div>
  );
};

export default ImageCounter;