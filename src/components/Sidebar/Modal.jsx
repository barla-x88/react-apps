import { useGlobalContext } from "../../context";

const Modal = () => {
  const { closeModal } = useGlobalContext();
  return (
    <div className="modal-overlay">
      <div>
        <span onClick={closeModal}>X</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ea.
      </div>
    </div>
  );
};
export default Modal;
