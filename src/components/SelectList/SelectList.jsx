import { useState } from "react";
import "./SelectList.css";
const frameworks = ["react", "angular", "vue", "svelte"];

const SelectList = () => {
  const [framework, setFramework] = useState("react");

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div className="form">
      <h1>What framework do you use?</h1>
      <form onSubmit={() => {}}>
        <select name="framework" onChange={handleFramework} value={framework}>
          {frameworks.map((fw, index) => (
            <option value={fw} key={index}>
              {fw}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default SelectList;
