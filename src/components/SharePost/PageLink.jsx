const PageLink = () => {
  return (
    <>
      <h2 className="self-start mt-7 text-base font-semibold">Page Link</h2>
      <div className="flex gap-5 justify-between px-3.5 py-3 mt-2 text-center whitespace-nowrap rounded-lg bg-zinc-300">
        <div role="textbox" tabIndex={0}>https://www.arnav/feed</div>
        <button aria-label="Copy link">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/746c9435cd6aa89f83aa25e8763e2d3c4e5995652e3d780250aad6c9a462e12a?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
        </button>
      </div>
    </>
  );
}

export default PageLink;