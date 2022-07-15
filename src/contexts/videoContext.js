import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer } from "../reducers";
import { getCategories, getVideos } from "../services";

const initialVideoValue = {
  videos: [],
  categories: [],
  likedVideos: [],
  watchLaterVideos: [],
  history: [],
  playlists: []
};

const VideoContext = createContext(initialVideoValue);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoValue
  );

  useEffect(() => {
    (async () => {
      const { videos } = await getVideos();
      const { categories } = await getCategories();
      videoDispatch({ type: "ADD_VIDEOS", payload: videos });
      videoDispatch({ type: "ADD_CATEGORIES", payload: categories });
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoData = () => useContext(VideoContext);

export { VideoProvider, useVideoData };
