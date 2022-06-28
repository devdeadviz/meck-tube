import { privateInstance } from "../../utils";

const createNewPlaylist = async (playlist) => {
  try {
    const { data } = await privateInstance.post("playlists", { playlist });
    return data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

const deletePlaylist = async (playlistId) => {
  try {
    const { data } = await privateInstance.delete(`playlists/${playlistId}`);
    return data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

const addNewVideoToPlaylist = async (playlistId, video) => {
  try {
    const { data } = await privateInstance.post(`playlists/${playlistId}`, {
      video,
    });
    return data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

const deleteVideoFromPlaylist = async (playlistId, videoId) => {
  try {
    const { data } = await privateInstance.delete(
      `playlists/${playlistId}/${videoId}`
    );
    return data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export {
  createNewPlaylist,
  deletePlaylist,
  addNewVideoToPlaylist,
  deleteVideoFromPlaylist,
};
