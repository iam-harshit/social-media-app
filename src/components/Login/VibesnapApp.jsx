import ImageGrid from "./ImageGrid";
import GoogleButton from "./GoogleButton";

const leftColumnImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/afe9e58887f7aa465328c025af772344f89d40aec5372e6835a6a7960482b7ea?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 1",
    className: "aspect-[0.63] w-[115px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/114e9ab6d58f5ec7926cd2ea6fa042f19d1cb218f3edee85e4704dfe7defe4a2?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 2",
    className: "aspect-[0.56] w-[116px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/2f833cabd4b5463d6fca60f26e5108b50c36f26a7a5264eaa714e2a0f24edc4c?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 3",
    className: "aspect-[0.56] w-[116px]"
  }
];

const middleColumnImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/de613e4271751c3f2742bacdb4ac95f4226bb2d31cb0f650852c6ed6fc8cc15f?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 4",
    className: "aspect-[1.92] w-[125px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/619c629675f764e67aadfea3c2228c841245fdfe0d435c46449b5f40757b0f7a?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 5",
    className: "aspect-[0.6] w-[125px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/057557b774aa75337d98779a8457e6920d287147e02d55fe8890b7c5caa03f91?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 6",
    className: "aspect-[0.6] w-[125px]"
  }
];

const rightColumnImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/e5064be169e52b3a794346fa9c58c4e2c0f24751a897efd2ad1a39b38a70f97e?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 7",
    className: "aspect-[0.57] w-[104px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/daf35a8b4b1ec5caa9c1596df69c8ebee6707657402937d4983068aedf0c05b9?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 8",
    className: "aspect-[0.5] w-[103px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/5b64de3316a4c0d580eb71a417920357c3c70edbf509fa098fa14864aa4d2bc2?apiKey=c27c0052c4c448a4b5a797d37767e8ca&",
    alt: "Vibesnap gallery image 9",
    className: "aspect-[0.5] w-[103px]"
  }
];

function VibesnapApp() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-white min-h-screen">
      <section className="flex gap-2" aria-label="Image gallery">
        <ImageGrid images={leftColumnImages} />
        <ImageGrid images={middleColumnImages} columnClassName="self-start" />
        <ImageGrid images={rightColumnImages} />
      </section>
      
      <section className="flex flex-col items-center px-9 pt-9 pb-20 w-full text-base text-black bg-white rounded-[63px]">
        <div className="flex gap-0.5 max-w-full text-3xl font-semibold whitespace-nowrap w-[171px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/a056a88da0038d50c4c950992b9905ce1483a1c614de6e82de49e1605a1a0d87?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
            alt=""
            className="object-contain shrink-0 aspect-[1.35] w-[46px]"
          />
          <h1 className="grow shrink w-[114px]">Vibesnap</h1>
        </div>
        <p className="text-center mt-2">
          Moments That Matter, Shared Forever.
        </p>
        <GoogleButton />
      </section>
    </main>
  );
}

export default VibesnapApp;