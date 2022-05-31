import React, { useState } from "react";

function NewHogForm() {
  const [formData, setFormData] = useState({
    name: "",
    "highest medal achieved": "",
    specialty: "",
    weight: "",
    image: "",
    greased: false,
  });

  const handleInput = ({ target }) => {
    const name = target.name;
    let value = target.value;

    if (target.type === "checkbox") {
      value = target.checked;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="normalText">
      <label>New Hog Form</label>
      <br></br>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        placeholder="Hog's Name"
        value={formData.name}
      />
      <br></br>
      <input
        type="text"
        name="highest medal achieved"
        onChange={handleInput}
        placeholder="Highest Medal Achieved"
        value={formData["highest medal achieved"]}
      />
      <br></br>
      <input
        type="text"
        name="specialty"
        onChange={handleInput}
        placeholder="Specialty"
        value={formData.specialty}
      />
      <br></br>
      <input
        type="text"
        name="weight"
        onChange={handleInput}
        placeholder="Weight"
        value={formData.weight}
      />
      <br></br>
      <input
        type="text"
        name="image"
        onChange={handleInput}
        placeholder="Image"
        value={formData.image}
      />
      <br></br>
      <label>Greased:</label>
      <input
        type="checkbox"
        name="greased"
        onChange={handleInput}
        value={formData.greased}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewHogForm;
