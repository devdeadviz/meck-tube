import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers";

const initialAuthValue = {
  authenticated: !!JSON.parse(localStorage.getItem("user")),
  user: JSON.parse(localStorage.getItem("user")),
  encodedToken: localStorage.getItem("encodedToken"),
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthValue);

  useEffect(() => {
    authDispatch({
      type: "AUTH_SUCCESS",
      payload: {
        user: JSON.parse(localStorage.getItem("user")),
        encodedToken: localStorage.getItem("encodedToken"),
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
