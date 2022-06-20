import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Home, Login } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
