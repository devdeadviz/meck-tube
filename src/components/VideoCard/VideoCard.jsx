import "./VideoCard.css";

const VideoCard = () => {
  return (
    <div className="vertical-card-wrapper videocard-wrapper">
      <div className="vertical-card-image-wrapper pos-rel">
        <img
          className="responsive-image videocard-thumbnail"
          src={`https://i.ytimg.com/vi/lBqgXNu2kfE/hq720_live.jpg`}
          alt="Video Card Thumbnail"
        />
        <div className="videocard-duration">15:10</div>
      </div>
      <div className="vertical-card-header">
        <p className="m-2">
          Keychron K6 Wireless Bluetooth Mechanical Keyboard Review
        </p>
      </div>
      <div className="vertical-card-body videcard-body my-4 mx-2">
        <small>Keychron K6</small>
        <div>
          <small>118K views</small>
          <small>3 weeks ago</small>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
