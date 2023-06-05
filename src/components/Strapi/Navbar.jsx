import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <h1 className="logo">Strapi</h1>
        <button type="button" className="toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
