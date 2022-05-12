import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <ul className="sidebar-options-list">
        <li className="sidebar-options">
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </li>
        <li className="sidebar-options">
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </li>
        <li className="sidebar-options">
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </li>
        <li className="sidebar-options">
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </li>
        <li className="sidebar-options">
          <AiOutlineHome className="sidebar-icons" />
          <span className="sidebar-option-text">Home</span>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
