import { useState, createContext } from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";

//exporting the value of createContext() return
export const navbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Mark" });

  const logout = () => {
    setUser(null);
  };

  return (
    <navbarContext.Provider value={{ user, logout }}>
      <nav>
        <h1>CONTEXT API</h1>
        <NavLinks />
      </nav>
    </navbarContext.Provider>
  );
};
export default Navbar;
