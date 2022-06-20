import { useState, useEffect } from "react";
import { Chip, VideoCard } from "../../components";
import { getCategories, getVideos } from "../../services";
import "./Home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { videos } = await getVideos();
      const { categories } = await getCategories();
      setCategories(categories);
      setVideos(videos);
    })();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-category-wrapper flex">
        {categories.map((category) => (
          <Chip key={category._id} chipText={category.categoryName} />
        ))}
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
