import { people } from "../../data";
import Person from "../Person";
import "./List.css";

const List = () => {
  return (
    <div className="flex">
      {people.map((person) => (
        <Person {...person} key={person.id} />
      ))}
    </div>
  );
};
export default List;
