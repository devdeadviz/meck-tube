import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
