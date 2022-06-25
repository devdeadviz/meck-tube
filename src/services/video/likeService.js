import axios from "axios";

const HEADERS = { authorization: localStorage.getItem("encodedToken") };

const likeVideo = async (video) => {
  try {
    const { data } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: HEADERS,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

const deleteLikeVideo = async (videoId) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: HEADERS,
    });
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { likeVideo, deleteLikeVideo };
