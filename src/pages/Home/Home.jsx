import { useState, useEffect } from "react";
import { Chip, VideoCard } from "../../components";
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
      <div className="home-category-wrapper flex">
        <Chip chipText={"Hola Dola"} />
      </div>
      <div className="flex flexWrap flexJustifyCenter">
        {videos.map(({ _id, duration, title, creator, view, uploadedOn }) => (
          <VideoCard
            key={_id}
            _id={_id}
            duration={duration}
            title={title}
            creator={creator}
            view={view}
            uploadedOn={uploadedOn}
          />
        ))}
      </div>
    </div>
  );
};

export { Home };
