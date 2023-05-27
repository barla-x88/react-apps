import { useState } from "react";
import Form from "./Form";
import "./GroceryBud.css";

const GroceryBud = () => {
  const [groceryList, setGroceryList] = useState([]);

  const addItemToList = () => {};
  return (
    <div className="app">
      <h1>Grocery List</h1>
      <Form addItemToListFn={addItemToList} />
    </div>
  );
};
export default GroceryBud;
