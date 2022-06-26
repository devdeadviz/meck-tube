import axios from "axios";

const login = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", user);
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { login };
