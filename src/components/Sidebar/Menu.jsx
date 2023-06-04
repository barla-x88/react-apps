import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const Menu = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <ul className="links-container">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <button type="button" onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
  );
};
export default Menu;
