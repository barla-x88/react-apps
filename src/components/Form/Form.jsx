import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //do something with values
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name + " " + email);
  };

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <h4>Controlled Inputs</h4>
        <div>
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Form;
