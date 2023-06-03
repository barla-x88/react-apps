import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./Home.css";
import { useGlobalContext } from "../../context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { toggleSidebar, openModal, isModalOpen } = useGlobalContext();

  return (
    <main>
      <FaBars className="bars" onClick={toggleSidebar} />
      <Sidebar />
      {!isModalOpen && (
        <button type="button" onClick={openModal}>
          Open Modal
        </button>
      )}
      {isModalOpen && <Modal />}
    </main>
  );
};
export default Home;
