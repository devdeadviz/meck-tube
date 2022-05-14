import "./VideoCard.css";

const VideoCard = ({ _id, duration, title, creator, view, uploadedOn }) => {
  return (
    <div className="vertical-card-wrapper videocard-wrapper">
      <div className="vertical-card-image-wrapper pos-rel">
        <img
          className="responsive-image videocard-thumbnail"
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
          alt="Video Card Thumbnail"
        />
        <div className="videocard-duration">{duration}</div>
      </div>
      <div className="vertical-card-header">
        <p className="m-2">{title}</p>
      </div>
      <div className="vertical-card-body videcard-body my-4 mx-2">
        <small>{creator}</small>
        <div>
          <small>{view} views</small>
          <small>{uploadedOn}</small>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
