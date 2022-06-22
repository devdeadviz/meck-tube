import { createContext, useContext } from "react";

const initialAuthValue = {
  authenticated: !!JSON.parse(localStorage.getItem("user")),
  user: JSON.parse(localStorage.getItem("user")),
  encodedToken: localStorage.getItem("encodedToken"),
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = (authReducer, initialAuthValue);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
