import { useState } from "react";
import { dummyTexts } from "../../data";
import "./DummyTextGenerator.css";

const DummyTextGenerator = () => {
  const [paragraphCount, setParagraphCount] = useState(1);
  const [textArray, setTextArray] = useState([]);

  //
  const getRandomParagraph = () => dummyTexts[Math.trunc(Math.random() * 10)];

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const paragraphs = [];
    for (let i = 1; i <= paragraphCount; i++) {
      paragraphs.push(getRandomParagraph());
    }
    setTextArray([...paragraphs]);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="paragraphCount">Number of paragraph</label>
          <input
            type="number"
            name="paragraphCount"
            id="paragraphCount"
            min={1}
            max={5}
            value={paragraphCount}
            onChange={(e) => setParagraphCount(e.target.value)}
          />
        </div>
        <input type="submit" value="Generate" />
      </form>
      <div className="paragraphs">
        {textArray.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
};
export default DummyTextGenerator;
