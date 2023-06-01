import { useContext } from "react";
import { navbarContext } from "./Navbar";

const UserContainer = () => {
  // since we provided the object as value in parent component
  const { user, logout } = useContext(navbarContext);
  return (
    <div className="usercontainer">
      {user && <h4>Hello There, {user.name}</h4>}
      {user && (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
      {!user && <p style={{ fontWeight: "bold" }}>Please Login</p>}
    </div>
  );
};
export default UserContainer;
