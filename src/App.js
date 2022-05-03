import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
