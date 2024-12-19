import { useNavigate } from "react-router-dom";

const FeedHeader = ({ profile }) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate("/profile")}>
        <img
            src={profile.avatar}
            alt={profile.name}
            className="w-12 h-12 rounded-full mr-3"
        />
        <div className="flex flex-col">
            <span className="text-[12px]">Welcome Back,</span>
            <h3 className="text-md font-bold">{profile.name}</h3>
        </div>
        </div>
    );
};

export default FeedHeader;
