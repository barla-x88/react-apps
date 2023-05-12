import { useState, useEffect } from "react";

const Form = function () {
  const handleClick = (e) => {
    const img = e.target.parentElement.querySelector("img");
    const url = URL.createObjectURL(e.target.files[0]);
    img.src = url;

    //destroy created URL
    // URL.revokeObjectURL(url);
  };
  return (
    <form method="post" encType="multipart/form-data" className="form">
      <ul>
        <li>
          <label htmlFor="image">Select a File: </label>
          <input type="file" name="image" id="image" onChange={handleClick} />
          <img src="" alt="" />
        </li>
      </ul>
      {/* <input type="submit" value="SUBMIT" onClick={handleClick} /> */}
    </form>
  );
};

export default Form;
