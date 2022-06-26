const videoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEOS":
      return { ...state, videos: action.payload };
    case "ADD_CATEGORIES":
      return { ...state, categories: action.payload };
    case "ADD_LIKED_VIDEOS":
      return { ...state, likedVideos: action.payload };
    case "ADD_WATCH_LATER_VIDEOS":
      return { ...state, watchLaterVideos: action.payload };
    case "UPDATE_HISTORY":
      return { ...state, history: action.payload };
    default:
      return state;
  }
};

export { videoReducer };
