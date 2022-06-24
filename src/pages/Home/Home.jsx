import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, VideoCard } from "../../components";
import { useVideoData } from "../../contexts";
import { getCategories, getVideos } from "../../services";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const {
    videoState: { videos },
    videoDispatch,
  } = useVideoData();

  useEffect(() => {
    (async () => {
      const { videos } = await getVideos();
      const { categories } = await getCategories();
      setCategories(categories);
      videoDispatch({ type: "ADD_VIDEOS", payload: videos });
    })();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-category-wrapper flex flexWrap">
        {categories.map((category) => (
          <Chip key={category._id} chipText={category.categoryName} />
        ))}
      </div>
      <div className="flex flexWrap flexJustifyCenter">
        {videos.map(({ _id, duration, title, creator, view, uploadedOn }) => (
          <Link className="text-decoration-none" to={`/video/${_id}`} key={_id}>
            <VideoCard
              _id={_id}
              duration={duration}
              title={title}
              creator={creator}
              view={view}
              uploadedOn={uploadedOn}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Home };
