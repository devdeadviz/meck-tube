import { Chip, VideoCard } from "../../components";
import { useVideoData } from "../../contexts";
import "./Home.css";

const Home = () => {
  const {
    videoState: { videos, categories },
  } = useVideoData();

  return (
    <div className="home-wrapper">
      <div className="home-category-wrapper flex flexWrap">
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
