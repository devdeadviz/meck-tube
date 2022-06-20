import axios from "axios";

const getCategories = async () => {
  try {
    const { data } = await axios.get("/api/categories");
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { getCategories };
