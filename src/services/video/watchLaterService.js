import { privateInstance } from "../../utils";

const addVideoToWatchLater = async (video) => {
  try {
    const { data } = await privateInstance.post("watchlater", { video });
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

const deleteVideoFromWatchLater = async (videoId) => {
  try {
    const { data } = await privateInstance.delete(`watchlater/${videoId}`);
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

export { addVideoToWatchLater, deleteVideoFromWatchLater };
