import "./SingleVideoPage.css";
import { AiOutlineLike, AiOutlineDislike, AiFillLike } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdWatchLater,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useVideoData } from "../../contexts";
import {
  addVideoInHistory,
  addVideoToWatchLater,
  deleteLikeVideo,
  deleteVideoFromWatchLater,
  likeVideo,
} from "../../services";
import { useEffect } from "react";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const {
    videoState: { videos, likedVideos, watchLaterVideos },
    videoDispatch,
  } = useVideoData();
  const video = videos.find((singleVideo) => singleVideo._id === videoId);

  const likeVideoHandler = async (videoObj) => {
    const { likes } = await likeVideo(videoObj);
    videoDispatch({ type: "ADD_LIKED_VIDEOS", payload: likes });
  };

  const removeLikedVideoHandler = async (videoId) => {
    const { likes } = await deleteLikeVideo(videoId);
    videoDispatch({ type: "ADD_LIKED_VIDEOS", payload: likes });
  };

  const isLikedVideo =
    likedVideos.find((likedVideo) => likedVideo._id === videoId) === undefined
      ? false
      : true;

  const addVideoToWatchLaterHandler = async (videoObj) => {
    const { watchlater } = await addVideoToWatchLater(videoObj);
    videoDispatch({ type: "ADD_WATCH_LATER_VIDEOS", payload: watchlater });
  };

  const removeVideoFromWatchLaterHandler = async (videoId) => {
    const { watchlater } = await deleteVideoFromWatchLater(videoId);
    videoDispatch({ type: "ADD_WATCH_LATER_VIDEOS", payload: watchlater });
  };

  const isPresentInWatchLater =
    watchLaterVideos.find(
      (watchLaterVideo) => watchLaterVideo._id === videoId
    ) === undefined
      ? false
      : true;

  useEffect(() => {
    (async () => {
      const { history } = await addVideoInHistory(video);
      videoDispatch({ type: "UPDATE_HISTORY", payload: history });
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="single-video-page-wrapper">
      <iframe
        className="video-player"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="single-video-data">
        <h2 className="single-video-heading">{video?.title}</h2>
        <div className="single-video-sub-heading">
          <div>
            <small>{video?.view} | </small>
            <small>{video?.uploadedOn}</small>
          </div>
          <ul className="single-video-options-list">
            {isLikedVideo ? (
              <li onClick={() => removeLikedVideoHandler(video._id)}>
                <AiFillLike className="single-video-icons" />
                <span>Liked</span>
              </li>
            ) : (
              <li onClick={() => likeVideoHandler(video)}>
                <AiOutlineLike className="single-video-icons" />
                <span>Like</span>
              </li>
            )}
            <li>
              <AiOutlineDislike className="single-video-icons" />
              <span>Dislike</span>
            </li>
            {isPresentInWatchLater ? (
              <li onClick={() => removeVideoFromWatchLaterHandler(video._id)}>
                <MdWatchLater className="single-video-icons" />
                <span>Added to Watch later</span>
              </li>
            ) : (
              <li onClick={() => addVideoToWatchLaterHandler(video)}>
                <MdOutlineWatchLater className="single-video-icons" />
                <span>Add to Watch later</span>
              </li>
            )}

            <li>
              <MdPlaylistAdd className="single-video-icons" />
              <span>Add to playlists</span>
            </li>
          </ul>
        </div>
        <h3 className="single-video-title">{video?.creator}</h3>
        <p className="single-video-description">{video?.description}</p>
      </div>
    </div>
  );
};

export { SingleVideoPage };
