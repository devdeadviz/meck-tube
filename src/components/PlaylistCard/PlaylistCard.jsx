import "./PlaylistCard.css";
import { MdDeleteOutline } from "react-icons/md";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="vertical-card-wrapper playlist-card-wrapper">
      <div className="vertical-card-header">
        <h4 className="m-2">{playlist?.title}</h4>
        <small className="mx-2">
          {playlist?.videos?.length ? playlist.videos.length : 0} Videos
        </small>
      </div>
      <MdDeleteOutline className="playlist-delete-icon" />
    </div>
  );
};

export { PlaylistCard };
