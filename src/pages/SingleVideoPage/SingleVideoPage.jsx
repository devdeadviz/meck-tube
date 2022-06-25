import "./SingleVideoPage.css";
import { AiOutlineLike, AiOutlineDislike, AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useVideoData } from "../../contexts";
import { deleteLikeVideo, likeVideo } from "../../services";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const {
    videoState: { videos, likedVideos },
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
            <li>
              <MdOutlineWatchLater className="single-video-icons" />
              <span>Add to Watch later</span>
            </li>
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
