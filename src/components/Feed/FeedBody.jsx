import FeedCard from "./FeedCard";

const FeedBody = ({ feeds, onLike }) => {
  return (
    <div>
      {feeds.map((feed, index) => (
        <FeedCard key={index} {...feed}  onLike={() => onLike(feed.id, feed.user.uid)} />
      ))}
    </div>
  );
};

export default FeedBody;