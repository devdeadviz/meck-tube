import "./Sidebar.css";
import { AiOutlineHome, AiOutlineLike, AiOutlineHistory } from "react-icons/ai";
import { RiPlayList2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getActiveSidebarStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#293246" : "",
  });

  return (
    <aside className="sidebar-wrapper">
      <ul className="sidebar-options-list">
        <NavLink
          className="text-decoration-none sidebar-options"
          to="/"
          style={getActiveSidebarStyle}
        >
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </NavLink>
        <NavLink
          className="text-decoration-none sidebar-options"
          to="/playlists"
          style={getActiveSidebarStyle}
        >
          <RiPlayList2Line className="sidebar-icons" />
          <span className="sidebar-option-text">Playlist</span>
        </NavLink>
        <NavLink
          className="text-decoration-none sidebar-options"
          to="/liked"
          style={getActiveSidebarStyle}
        >
          <AiOutlineLike className="sidebar-icons" />
          <span className="sidebar-option-text">Liked</span>
        </NavLink>
        <NavLink
          className="text-decoration-none sidebar-options"
          to="/watchlater"
          style={getActiveSidebarStyle}
        >
          <MdOutlineWatchLater className="sidebar-icons" />
          <span className="sidebar-option-text">Watch Later</span>
        </NavLink>
        <NavLink
          className="text-decoration-none sidebar-options"
          to="/history"
          style={getActiveSidebarStyle}
        >
          <AiOutlineHistory className="sidebar-icons" />
          <span className="sidebar-option-text">History</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export { Sidebar };
