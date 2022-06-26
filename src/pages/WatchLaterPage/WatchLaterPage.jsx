import { VideoCard } from "../../components";
import { useVideoData } from "../../contexts";
import "./WatchLaterPage.css";

const WatchLaterPage = () => {
  const {
    videoState: { watchLaterVideos },
  } = useVideoData();

  return (
    <div className="watch-later-page-wrapper">
      {watchLaterVideos.map(
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

export { WatchLaterPage };
