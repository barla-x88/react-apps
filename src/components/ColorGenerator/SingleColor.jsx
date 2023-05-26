const SingleColor = ({ color, fn }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
        }}
        onClick={() => {
          navigator.clipboard.writeText(color).then(() => {
            fn("copied to clipboard!");
          });
        }}
      ></div>
      <p>{color}</p>
    </div>
  );
};
export default SingleColor;
