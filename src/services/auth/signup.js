import axios from "axios";

const signup = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/signup", user);
    return data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { signup };
