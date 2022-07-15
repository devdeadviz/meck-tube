import { useState } from "react";
import { PlaylistCard, PlaylistModal } from "../../components";
import { useVideoData } from "../../contexts";
import "./Playlists..css";

const Playlists = () => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const {
    videoState: { playlists },
  } = useVideoData();

  return (
    <div className="playlists-wrapper">
      <button
        type="button"
        className="btn btn-primary create-playlist-btn m-2"
        onClick={() => setShowPlaylistModal(true)}
      >
        Create Playlist
      </button>
      <div className="playlists-cards-container flex flexWrap">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
      {showPlaylistModal && (
        <PlaylistModal setShowPlaylistModal={setShowPlaylistModal} />
      )}
    </div>
  );
};

export { Playlists };
