import { useState } from "react";
import { useEffect } from "react";

// import { people } from "../../../data";

const people = [
  { id: 1, name: "bob", nickName: "Stud Muffin" },
  { id: 2, name: "peter" },
  {
    id: 3,
    name: "oliver",
    images: [
      {
        small: {
          url: "https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg",
        },
      },
    ],
  },
  { id: 4, name: "david" },
];

const ObjectDisplay = () => {
  //get the names of all people in people array
  const names = people.map((people) => people.name);

  //person to display when the component first gets rendered
  const [currentPerson, setCurrentPerson] = useState(0);

  //returns the next person in the array
  const getNextPerson = () => {
    const index = currentPerson < names.length - 1 ? currentPerson + 1 : 0;

    //sets the current person to next person in the line
    setCurrentPerson(index);
  };

  const [person, setPerson] = useState(people[currentPerson]);
  const [btnName, setBtnName] = useState(names[currentPerson + 1]);

  const handleBtnClick = () => {
    getNextPerson();
    setPerson(people[currentPerson]);
    setBtnName(names[currentPerson + 1]);
  };
  return (
    <div>
      <h2>useState object example</h2>
      <div key={person.id}>
        <p>{person.name}</p>
        <p>{person.nickName}</p>
        {/* <p><img src={person.images} alt="person Image" /></p> */}
        <button type="button" className="btn" onClick={handleBtnClick}>
          Show {btnName}
        </button>
      </div>
    </div>
  );
};

export default ObjectDisplay;
