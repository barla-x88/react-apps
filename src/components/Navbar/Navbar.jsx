import { useRef, useState } from "react";
import "./Navbar.css";
import { links } from "./data";
import Link from "./Link";

const Navbar = () => {
  const [linkVisible, setLinkVisible] = useState(false);
  const ulListRef = useRef(null);
  const burgerClick = (e) => {
    setLinkVisible(!linkVisible);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        WEB<span>DEV</span>
      </div>
      <div className="burgers" onClick={burgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className="links-container"
        style={{
          height: !linkVisible
            ? 0
            : `${ulListRef.current.getBoundingClientRect().height}px`,
        }}
      >
        <ul className="links" ref={ulListRef}>
          {links.map((link) => (
            <Link {...link} key={link.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
