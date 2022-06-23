import "./Sidebar.css";
import { AiOutlineHome, AiOutlineLike, AiOutlineHistory } from "react-icons/ai";
import { RiPlayList2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <ul className="sidebar-options-list">
        <li className="sidebar-options">
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </li>
        <li className="sidebar-options">
          <RiPlayList2Line className="sidebar-icons" />
          <span className="sidebar-option-text">Playlist</span>
        </li>
        <li className="sidebar-options">
          <AiOutlineLike className="sidebar-icons" />
          <span className="sidebar-option-text">Liked</span>
        </li>
        <li className="sidebar-options">
          <MdOutlineWatchLater className="sidebar-icons" />
          <span className="sidebar-option-text">Watch Later</span>
        </li>
        <li className="sidebar-options">
          <AiOutlineHistory className="sidebar-icons" />
          <span className="sidebar-option-text">History</span>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
