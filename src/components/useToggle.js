import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  //toggle functionality
  const toggle = () => {
    setShow(!show);
  };

  //you can return an array or an object
  return { show, toggle };
};

export default useToggle;
