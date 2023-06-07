import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav className="navbar" onMouseOver={handleSubmenu}>
      <div className="navbar-items">
        <h1 className="logo">Strapi</h1>
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
