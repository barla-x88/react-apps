import useFetch from "../useFetch";
import { BarLoader } from "react-spinners";
import "./FetchData.css";

const FetchData = () => {
  const url = "https://api.github.com/users/barla-x88";
  const { isLoading, isError, user } = useFetch(url);

  if (isLoading) {
    return (
      <div className="loadDiv">
        <BarLoader color="#36d7b7" width={300} />
      </div>
    );
  }

  if (isError) {
    return console.log(isError);
  }
  // destrucure user properties
  const { avatar_url, login, name, html_url, bio } = user;
  return (
    <div className="container">
      <div>
        <img src={avatar_url} alt={login} className="user-img" />
      </div>
      <div>
        <h2>
          {name}
          <br></br>
          <span>
            <a href={html_url}>{login}</a>
          </span>
        </h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};
export default FetchData;
