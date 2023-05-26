import ColorGenerator from "./components/ColorGenerator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <ColorGenerator fn={toast} />
    </div>
  );
};
export default App;
