import { useVideoData } from "../../contexts";
import { VideoCard } from "../../components";
import "./LikedPage.css";

const LikedPage = () => {
  const {
    videoState: { likedVideos },
  } = useVideoData();

  return (
    <div className="liked-page-wrapper">
      {likedVideos.map(
        ({ _id, duration, title, creator, view, uploadedOn }) => (
          <VideoCard
            key={_id}
            _id={_id}
            duration={duration}
            title={title}
            creator={creator}
            view={view}
            uploadedOn={uploadedOn}
          />
        )
      )}
    </div>
  );
};

export { LikedPage };
