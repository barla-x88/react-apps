import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import "./Strapi.css";

const Strapi = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
};
export default Strapi;
