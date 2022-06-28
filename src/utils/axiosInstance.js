import axios from "axios";

const privateInstance = axios.create({
  baseURL: "/api/user/",
  headers: {
    authorization: localStorage.getItem("encodedToken"),
  },
});

export { privateInstance };
