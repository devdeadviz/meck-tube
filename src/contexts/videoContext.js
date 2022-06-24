import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducers";

const initialVideoValue = {
  videos: [],
  likedVideos: [],
  watchLaterVideos: [],
};

const VideoContext = createContext(initialVideoValue);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoValue
  );

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoData = () => useContext(VideoContext);

export { VideoProvider, useVideoData };
