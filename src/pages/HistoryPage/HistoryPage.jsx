import { VideoCard } from "../../components";
import { useVideoData } from "../../contexts";
import { clearHistory } from "../../services";
import "./HistoryPage.css";

const HistoryPage = () => {
  const {
    videoState: { history },
    videoDispatch,
  } = useVideoData();

  const clearHistoryHandler = async () => {
    const { history } = await clearHistory();
    videoDispatch({ type: "UPDATE_HISTORY", payload: history });
  };

  return (
    <div className="history-page-wrapper">
      <button
        type="button"
        className="btn btn-danger clear-history-btn m-2"
        onClick={clearHistoryHandler}
      >
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
