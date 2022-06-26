import axios from "axios";

const HEADERS = { authorization: localStorage.getItem("encodedToken") };

const addVideoInHistory = async (video) => {
  try {
    const { data } = await axios.post(
      "/api/user/history",
      { video },
      { headers: HEADERS }
    );
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

const deleteVideoFromHistory = async (videoId) => {
  try {
    const { data } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: HEADERS,
    });
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

const clearHistory = async () => {
  try {
    const { data } = await axios.delete("/api/user/history/all", {
      headers: HEADERS,
    });
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

export { addVideoInHistory, deleteVideoFromHistory, clearHistory };
