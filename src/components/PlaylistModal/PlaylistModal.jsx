import "./PlaylistModal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

const PlaylistModal = ({ setShowPlaylistModal }) => {
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);

  return (
    <div className="playlist-modal">
      <div className="playlist-modal-content">
        <div className="playlist-modal-header">
          <h2>Save to Playlist</h2>
          <AiOutlineCloseCircle
            className="playlist-modal-icon"
            onClick={() => setShowPlaylistModal(false)}
          />
        </div>
        <div className="playlist-modal-body">
          <section className="playlists">
            <label className="playlist-text">
              <input type="checkbox" className="mr-2" />
              Demo
            </label>
            <label className="playlist-text">
              <input type="checkbox" className="mr-2" />
              Demo
            </label>
            <label className="playlist-text">
              <input type="checkbox" className="mr-2" />
              Demo
            </label>
            <label className="playlist-text">
              <input type="checkbox" className="mr-2" />
              Demo
            </label>
          </section>
          {showPlaylistInput && (
            <section className="playlist-input-wrapper">
              <input
                type="text"
                className="text-input playlist-name-input my-0"
                name="name"
                placeholder="Enter the playlist name"
              />
              <button type="button" class="btn btn-primary create-btn mx-2">Create</button>
            </section>
          )}
          {!showPlaylistInput && (
            <button
              type="button"
              className="btn btn-primary playlist-btn"
              onClick={() => setShowPlaylistInput(true)}
            >
              Create New Playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
