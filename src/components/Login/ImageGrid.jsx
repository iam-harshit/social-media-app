const ImageGrid = ({ images, columnClassName }) => {
  return (
    <div className={`flex flex-col ${columnClassName}`}>
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className={`object-contain ${index > 0 ? 'mt-2' : ''} ${image.className}`}
        />
      ))}
    </div>
  );
};

export default ImageGrid;