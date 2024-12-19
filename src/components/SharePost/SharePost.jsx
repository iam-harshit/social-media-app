import SocialRow from "./SocialRow";
import PageLink from "./PageLink";

const socialRowOne = [
  { name: "Twitter" },
  { name: "Facebook" },
  { name: "Reddit" },
  { name: "Discord" }
];

const socialRowTwo = [
  { name: "WhatsApp", grow: true },
  { name: "Messenger" },
  { name: "Telegram" },
  { name: "Instagram" }
];

const SharePost = () => {
  return (
    <main className="flex flex-col mx-auto text-xs text-black rounded-none max-w-[328px]">
      <section className="flex flex-col px-5 py-6 w-full bg-white rounded-xl">
        <header className="flex gap-5 justify-between text-2xl font-extrabold">
          <h1 className="my-auto">Share post</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/6e8a89d46273852110d3f91b0f8b0ae2b268330f525036654aa8d5f9e802f85b?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt=""
            className="object-contain shrink-0 w-8 aspect-square"
          />
        </header>
        <SocialRow
          imageSrc="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/1f805955ea3f74bfe46e11e826f288fcb703b67b90b8bd438f8254b40b31f9da?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
          items={socialRowOne}
          className="mt-5"
        />
        <SocialRow
          imageSrc="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/841fae8ddf8983afc0c671e2fda011d618ca68d74c30bb9217fb7e485e8a445b?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
          items={socialRowTwo}
          className="mt-7"
        />
        <PageLink />
      </section>
    </main>
  );
}

export default SharePost;