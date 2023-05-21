import React, { useState } from "react";

import "./Signup.css";

export default function Signup() {
  const [user, setUser] = useState({ name: "", password: "", email: "" });

  const handleChange = (e) => {
    // using dynamic object keys
    //spreading to copy values first then overwriting them
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ name: "", password: "", email: "" });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          id="name"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
