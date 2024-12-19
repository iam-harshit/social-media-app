import { formatDistanceToNow } from "date-fns";
import { HiHeart } from "react-icons/hi";
import { IoNavigate } from "react-icons/io5";

const FeedCard = ({ user, timestamp, caption, mediaUrls = [], likes = 0, onLike  }) => {
    const timeAgo = timestamp
    ? formatDistanceToNow(new Date(timestamp), { addSuffix: true })
    : "Unknown time";

    const renderCaption = (text) => {
        if(!text) return null;
        return text.split(" ").map((word, index) => {
        if (word.startsWith("#")) {
            return (
            <span key={index} className="text-blue-500">
                {word}{" "}
            </span>
            );
        }
        return word + " ";
        });
    };

    const handleLike = () => {
    if (onLike) {
      onLike();
    }
  };

    return (
        <div className="bg-purple-50 rounded-xl p-4 shadow-md mb-6">
        <div className="flex items-center mb-4">
            <img
            src={user?.avatar}
            alt={user?.name}
            className="w-10 h-10 rounded-full mr-3"
            />
            <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="text-sm text-gray-500">{timeAgo}</p>
            </div>
        </div>
        <p className="text-gray-800 mb-3">{renderCaption(caption)}</p>
        <div className="flex gap-2 mb-4">
            {mediaUrls.map((image, index) => (
            <img
                key={index}
                src={image}
                alt="Feed content"
                className="w-1/2 rounded-lg object-cover"
            />
            ))}
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center text-pink-500">
            <button className="flex items-center" onClick={handleLike}>
                <HiHeart size={20} />
                <span className="pl-1">{likes}</span>
            </button>
            </div>
            <button className="flex items-center text-gray-500">
            <IoNavigate size={18} />
            <span className="pl-1">Share</span>
            </button>
        </div>
        </div>
    );
};

export default FeedCard;
