import { useState } from "react";
import { PlaylistModal } from "../../components";
import "./Playlists..css";

const Playlists = () => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  return (
    <div className="playlists-wrapper">
      <button
        type="button"
        className="btn btn-primary create-playlist-btn m-2"
        onClick={() => setShowPlaylistModal(true)}
      >
        Create Playlist
      </button>
      <div className="playlists-cards-container"></div>
      {showPlaylistModal && (
        <PlaylistModal setShowPlaylistModal={setShowPlaylistModal} />
      )}
    </div>
  );
};

export { Playlists };
