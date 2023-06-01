const UserContainer = ({ user, logout }) => {
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
