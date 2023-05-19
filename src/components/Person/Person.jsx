const Person = ({ name, nickName, images }) => {
  //this will throw errors
  // const imgPath = images[0].small.url;

  //handling properties which may not be available with optional chaining
  const imgPath = images?.[0]?.small?.url;

  console.log(imgPath);
  return (
    <div>
      <h3>Name : {name}</h3>
      {nickName && <h4>Nick Name: {nickName}</h4>}
      {imgPath && (
        <div>
          <img src={imgPath} alt="name" />
        </div>
      )}
    </div>
  );
};
export default Person;
