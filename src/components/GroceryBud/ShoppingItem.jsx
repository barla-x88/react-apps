import { useState } from "react";

const ShoppingItem = ({ item, deleteItem, groceryList, setLocalStorage }) => {
  const [checked, setChecked] = useState(item.completed);

  const setAsPurchased = () => {
    item.completed = !checked;
    setChecked(!checked);
    setLocalStorage([...groceryList]);
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={setAsPurchased} />
      {item.name}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  );
};
export default ShoppingItem;
