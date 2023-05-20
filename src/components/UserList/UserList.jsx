import "./UserList.css";
import { data } from "../../data";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputValue;
    const previousId = users.at(-1).id;
    const currentId = previousId + 1;

    setUsers([...users, { id: currentId, name }]);
  };

  return (
    <div className="form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <div className="list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button
                type="button"
                onClick={(e) =>
                  setUsers(users.filter((person) => person.id !== user.id))
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default User;
