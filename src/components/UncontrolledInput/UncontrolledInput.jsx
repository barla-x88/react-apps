import "./UncontrolledInput.css";

const UncontrolledInput = () => {
  //do something with values
  const handleSubmit = (e) => {
    e.preventDefault();

    //get the form element
    const form = e.currentTarget;
    const submitBtn = form.querySelector('input[type="submit"]');
    //create a form Data object
    const formData = new FormData(form);

    //LOOP THROUGH ALL DATA OF FORM
    // for (const [key, value] of formData) {
    //   console.log(`${key}: ${value}\n`);
    // }

    const name = formData.get("name");
    const email = formData.get("email");
    console.log(name, email);

    //array of arrays
    console.log([...formData.entries()]);

    //create an object from form data
    const object = Object.fromEntries(formData);

    //do something with object
    console.log(object);

    //clear the form
    e.currentTarget.reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div>
          <label htmlFor="name">NAME:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <input type="submit" name="btn" value="SUBMIT" />
      </form>
    </div>
  );
};

export default UncontrolledInput;
