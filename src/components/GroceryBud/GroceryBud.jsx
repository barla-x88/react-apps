import { useState } from "react";
import Form from "./Form";
import "./GroceryBud.css";
import { nanoid } from "nanoid";
import ShoppingItem from "./ShoppingItem";

const GroceryBud = ({ toast }) => {
  const getLocalStorage = () => {
    const groceryList = window.localStorage.getItem("groceryList");
    return JSON.parse(groceryList) || [];
  };

  const [groceryList, setGroceryList] = useState(getLocalStorage());

  const setLocalStorage = (value) => {
    const values = JSON.stringify(value);
    window.localStorage.setItem("groceryList", values);
  };

  const addItemToList = (itemName) => {
    const item = {
      name: itemName,
      completed: false,
      id: nanoid(10),
    };
    setGroceryList([...groceryList, item]);
    toast.success("Item added to List!");
    setLocalStorage([...groceryList, item]);
  };

  const deleteItem = (id) => {
    const newList = groceryList.filter((item) => item.id !== id);
    setGroceryList([...newList]);
    setLocalStorage([...newList]);
  };

  return (
    <div className="app-container">
      <h1>Grocery List</h1>
      <Form addItemToListFn={addItemToList} />
      {groceryList.length >= 1 && (
        <ul className="shopping-list">
          {groceryList.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              groceryList={groceryList}
              setLocalStorage={setLocalStorage}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default GroceryBud;
