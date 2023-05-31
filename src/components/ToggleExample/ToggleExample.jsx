//import first
import useToggle from "../useToggle";

const ToggleExample = () => {
  // have to use the exact property names since we returned an object
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h4>Toogle custom hook</h4>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      {show && <p>Some Stuff</p>}
    </div>
  );
};
export default ToggleExample;
