import { useNavigate } from "react-router-dom";
import {signInWithGoogle} from "../../services/auth";

const GoogleButton = () => {

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("Successfully logged in!");
      navigate("/feed");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex gap-3.5 items-center px-5 py-3.5 mt-7 -mb-6 font-bold leading-snug text-white rounded-3xl bg-zinc-800 min-h-[50px]"
      aria-label="Continue with Google"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/89ff682237ef2e0804da66d80bbf56bbd442cba44c50977446b7bb3dab275cec?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[18px]"
      />
      <span className="my-auto rounded-none">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleButton;