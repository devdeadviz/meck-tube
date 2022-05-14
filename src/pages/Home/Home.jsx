import { useState, useEffect } from "react";
import { VideoCard } from "../../components";
import { getVideos } from "../../services";
import "./Home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const { videos } = await getVideos();
      setVideos(videos);
    })();
  }, []);

  return (
    <div className="home-wrapper">
      {videos.map(({ _id, duration, title, creator, view, uploadedOn }) => (
        <VideoCard
          _id={_id}
          duration={duration}
          title={title}
          creator={creator}
          view={view}
          uploadedOn={uploadedOn}
        />
      ))}
    </div>
  );
};

export { Home };
