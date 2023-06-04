import { useGlobalContext } from "../../context";

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div>
        <span onClick={closeModal}>X</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ea.
      </div>
    </div>
  );
};
export default Modal;
