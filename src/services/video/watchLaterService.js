import axios from "axios";

const HEADERS = { authorization: localStorage.getItem("encodedTokens") };

const addVideoToWatchLater = async (video) => {
  try {
    const { data } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: HEADERS,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

const deleteVideoFromWatchLater = async (videoId) => {
  try {
    const { data } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: HEADERS,
    });
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

export { addVideoToWatchLater, deleteVideoFromWatchLater };
