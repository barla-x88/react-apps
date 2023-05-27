import { useState } from "react";

const Form = ({ addItemToList }) => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = itemName.trim();
    if (!item) console.warn("Input Item Name");

    setItemName("");
  };
  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          value={itemName}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};
export default Form;
