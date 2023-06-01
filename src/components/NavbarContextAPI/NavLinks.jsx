import UserContainer from "./UserContainer";

const data = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/",
    text: "about",
  },
];

const NavLinks = () => {
  return (
    <>
      <ul>
        {data.map((menuItem) => (
          <li key={menuItem.id}>
            <a href={menuItem.url}>{menuItem.text}</a>
          </li>
        ))}
      </ul>
      <UserContainer />
    </>
  );
};
export default NavLinks;
