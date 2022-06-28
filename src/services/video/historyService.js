import { privateInstance } from "../../utils";

const addVideoInHistory = async (video) => {
  try {
    const { data } = await privateInstance.post("history", { video });
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

const deleteVideoFromHistory = async (videoId) => {
  try {
    const { data } = await privateInstance.delete(`history/${videoId}`);
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

const clearHistory = async () => {
  try {
    const { data } = await privateInstance.delete("history/all");
    return data;
  } catch (error) {
    console.error(error.response.error);
  }
};

export { addVideoInHistory, deleteVideoFromHistory, clearHistory };
