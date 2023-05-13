import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

// Get All endpoints
// https://api.github.com/

const url = "https://api.github.com/users/barla-x88";

const wait = function (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time * 1000);
  });
};

const FetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      //simulate fetching time
      await wait(6);
      const response = await fetch(url);
      const userObject = await response.json();
      return userObject;
    };

    getData().then((object) => {
      setUser(object);
    });
  }, []);

  if (!user) {
    return (
      <div className="loadDiv">
        <BarLoader color="#36d7b7" width={300} />
      </div>
    );
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
