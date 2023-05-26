import { useState } from "react";
import colorGen from "./colorGen";
import ColorList from "./ColorList";
import "./Form.css";

const Form = ({ fn }) => {
  const [colors, setColors] = useState(null);
  const [color, setColor] = useState("#1dd3dd");

  const handleSubmit = (e) => {
    e.preventDefault();
    const colors = colorGen(color);
    setColors(colors);
  };
  return (
    <>
      <h1>Input a color to get started!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Choose Color</label>
        <input
          type="color"
          name="color"
          id="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          value={color}
        />
        <input
          type="text"
          name="colorCode"
          id="colorCode"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input type="submit" value="Generate" />
      </form>
      {colors && <ColorList {...colors} fn={fn} />}
    </>
  );
};
export default Form;
