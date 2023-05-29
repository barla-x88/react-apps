import { useEffect, useRef, useState } from "react";

const App = () => {
  const [submitCount, setSubmitCount] = useState(0);

  const refContainer = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log(submitCount);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //this will trigger rerender
    setSubmitCount(submitCount + 1);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Submit count : {submitCount}</h1>
        <input type="text" id="text" ref={refContainer} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default App;
