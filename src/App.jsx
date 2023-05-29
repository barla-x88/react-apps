import { useEffect, useRef, useState } from "react";

const App = () => {
  const [submitCount, setSubmitCount] = useState(0);

  const refContainer = useRef(null);

  console.log(refContainer); // {current: null} on initial render

  //runs after the render
  //this will run only once after the initial render because
  //dependency array is empty
  useEffect(() => {
    //setting value manually
    //this will not trigger rerender
    refContainer.current = document.querySelector("#text");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);

    //this will trigger rerender
    setSubmitCount(submitCount + 1);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Submit count : {submitCount}</h1>
        <input type="text" id="text" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default App;
