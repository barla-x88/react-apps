import { useGlobalContext } from "../../context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <FaBars className="bars" onClick={openSidebar} />
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
    </main>
  );
};
export default Home;
