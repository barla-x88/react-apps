import { useEffect, useState } from "react";

const CleanupFn = () => {
  const [toggle, setToggle] = useState(false);
  console.log("Initial Render");
  return (
    <div>
      {toggle && <SecondComp />}
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

const SecondComp = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup Function");
    };
  }, []);

  return <h1>Second Component</h1>;
};

export default CleanupFn;
