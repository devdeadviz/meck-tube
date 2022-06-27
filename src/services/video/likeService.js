import { privateInstance } from "../../utils";

const likeVideo = async (video) => {
  try {
    const { data } = await privateInstance.post("likes", { video });
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

const deleteLikeVideo = async (videoId) => {
  try {
    const { data } = await privateInstance.delete(`likes/${videoId}`);
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { likeVideo, deleteLikeVideo };
