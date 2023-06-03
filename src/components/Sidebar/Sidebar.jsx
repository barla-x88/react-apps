import { useGlobalContext } from "../../context";
import { links, social } from "./data";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div className="sidebar">
      {isSidebarOpen && (
        <ul className="links-container">
          {links.map((link) => (
            <li key={link.id}>
              {link.icon}
              <a href={link.url}>{link.text.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Sidebar;
