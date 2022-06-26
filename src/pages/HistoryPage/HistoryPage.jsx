import { VideoCard } from "../../components";
import { useVideoData } from "../../contexts";
import "./HistoryPage.css";

const HistoryPage = () => {
  const {
    videoState: { history },
  } = useVideoData();

  return (
    <div className="history-page-wrapper">
      <button type="button" className="btn btn-danger clear-history-btn m-2">
        Clear History
      </button>
      <div className="history-videos-wrapper">
        {history.length > 0 &&
          history.map(({ _id, duration, title, creator, view, uploadedOn }) => (
            <VideoCard
              key={_id}
              _id={_id}
              duration={duration}
              title={title}
              creator={creator}
              view={view}
              uploadedOn={uploadedOn}
            />
          ))}
      </div>
    </div>
  );
};

export { HistoryPage };
