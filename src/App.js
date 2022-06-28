import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import {
  HistoryPage,
  Home,
  LikedPage,
  Login,
  Signup,
  SingleVideoPage,
  WatchLaterPage,
} from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/video/:videoId" element={<SingleVideoPage />} />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/watchlater" element={<WatchLaterPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
