import SingleColor from "./SingleColor";

const ColorList = ({ shades, tints, fn }) => {
  return (
    <div className="ColorList">
      <h1>Shades</h1>
      <div className="shades" style={{ display: "flex", flexWrap: "wrap" }}>
        {shades.map((color, i) => (
          <SingleColor color={color} key={i} fn={fn} />
        ))}
      </div>
      <h1>Tints</h1>
      <div className="tints" style={{ display: "flex", flexWrap: "wrap" }}>
        {tints.map((color, i) => (
          <SingleColor color={color} key={i} fn={fn} />
        ))}
      </div>
    </div>
  );
};
export default ColorList;
