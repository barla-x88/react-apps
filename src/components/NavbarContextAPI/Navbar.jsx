import { useState } from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Mark" });

  const logout = () => {
    setUser(null);
  };

  return (
    <nav>
      <h1>CONTEXT API</h1>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
export default Navbar;
