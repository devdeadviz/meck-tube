import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
