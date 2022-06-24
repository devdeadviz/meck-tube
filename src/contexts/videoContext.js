import { createContext, useContext, useReducer } from "react";

const initialVideoValue = {
  videos: [],
  likedVideos: [],
  watchLaterVideos: [],
};

const VideoContext = createContext(initialVideoValue);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(() => {}, initialVideoValue);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoData = () => useContext(VideoContext);

export { VideoProvider, useVideoData };
