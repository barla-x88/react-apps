import { useGlobalContext } from "../../context";

const Modal = () => {
  const { isModalOpen, openModal, closeModal } = useGlobalContext();
  return (
    <div className="modal">
      {isModalOpen && (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ea.</p>
      )}
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
    </div>
  );
};
export default Modal;
