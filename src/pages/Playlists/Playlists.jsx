import "./Playlists..css";

const Playlists = () => {
  return (
    <div className="playlists-wrapper">
      <button type="button" className="btn btn-primary create-playlist-btn m-2">
        Create Playlist
      </button>
      <div className="playlists-cards-container"></div>
    </div>
  );
};

export { Playlists };
