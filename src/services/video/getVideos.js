import axios from "axios";

const getVideos = async () => {
  try {
    const { data } = await axios.get("/api/videos");
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export { getVideos };
