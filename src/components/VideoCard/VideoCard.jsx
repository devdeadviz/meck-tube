import "./VideoCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiPlayList2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useVideoData } from "../../contexts";
import { deleteVideoFromHistory } from "../../services";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";

const VideoCard = ({ _id, duration, title, creator, view, uploadedOn }) => {
  const [showOptionModal, setShowOptionModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const location = useLocation();

  const { videoDispatch } = useVideoData();

  const removeVideoFromHistoryHandler = async (videoId) => {
    const { history } = await deleteVideoFromHistory(videoId);
    videoDispatch({ type: "UPDATE_HISTORY", payload: history });
  };

  const showPlaylistModalHandler = () => {
    setShowPlaylistModal(true);
    setShowOptionModal(false);
  };

  return (
    <div className="vertical-card-wrapper videocard-wrapper">
      <Link className="text-decoration-none" to={`/video/${_id}`}>
        <div className="vertical-card-image-wrapper pos-rel">
          <img
            className="responsive-image videocard-thumbnail"
            src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
            alt="Video Card Thumbnail"
          />
          <div className="videocard-duration">{duration}</div>
        </div>
      </Link>
      <div className="vertical-card-header flex flexJustifyBetween flexAlignItemsCenter">
        <p className="my-2">{title}</p>
        <BsThreeDotsVertical
          className="options-icon mr-0 pr-0"
          onClick={() => setShowOptionModal((prev) => !prev)}
        />
      </div>
      {showOptionModal && (
        <div className="options-card">
          <div className="flex flexAlignItemsCenter my-2">
            <MdOutlineWatchLater />
            <small className="ml-2">Add to watch later</small>
          </div>
          <div
            className="flex flexAlignItemsCenter my-2"
            onClick={showPlaylistModalHandler}
          >
            <RiPlayList2Line />
            <small className="ml-2">Add to playlist</small>
          </div>
          {location.pathname === "/history" && (
            <div
              className="flex flexAlignItemsCenter my-2"
              onClick={() => removeVideoFromHistoryHandler(_id)}
            >
              <AiOutlineHistory />
              <small className="ml-2">Remove from history</small>
            </div>
          )}
        </div>
      )}
      <div className="vertical-card-body videocard-body my-4">
        <small>{creator}</small>
        <div>
          <small>{view} views</small>
          <small>{uploadedOn}</small>
        </div>
      </div>
      {showPlaylistModal && (
        <PlaylistModal setShowPlaylistModal={setShowPlaylistModal} />
      )}
    </div>
  );
};

export { VideoCard };
