import GroceryBud from "./components/GroceryBud/GroceryBud";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <GroceryBud toast={toast} />
    </>
  );
};
export default App;
