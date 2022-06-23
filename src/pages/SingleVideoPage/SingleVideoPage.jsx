import "./SingleVideoPage.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";

const SingleVideoPage = () => {
  const video = {};

  return (
    <div className="single-video-page-wrapper">
      <iframe
        className="video-player"
        src={`https://www.youtube.com/embed/${video._id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="single-video-data">
        <h2 className="single-video-heading">{video.title}</h2>
        <div className="single-video-sub-heading">
          <div>
            <small>{video.view} | </small>
            <small>{video.uploadedOn}</small>
          </div>
          <ul className="single-video-options-list">
            <li>
              <AiOutlineLike className="single-video-icons" />
              <span>Like</span>
            </li>
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
        <h3 className="single-video-title">{video.creator}</h3>
        <p className="single-video-description">{video.description}</p>
      </div>
    </div>
  );
};

export { SingleVideoPage };
