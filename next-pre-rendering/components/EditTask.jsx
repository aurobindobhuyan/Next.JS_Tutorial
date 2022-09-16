import React, { useState } from "react";

const EditTask = ({ data, handleToggle }) => {
  const [formData, setFormData] = useState({
    title: data._id ? data.title : "",
    body: data._id ? data.body : "",
    isCompleted: data._id ? data.isCompleted : false,
    categories: data._id ? data.categories : "Office",
  });
  const category = ["Gym", "Work", "Personal", "Home", "Others", "Office"];

  const handleChange = (e) => {
    const result =
      e.target.name === "isCompleted"
        ? { ...formData, ...{ [e.target.name]: e.target.checked } }
        : { ...formData, ...{ [e.target.name]: e.target.value } };
    setFormData(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Editing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <select name="categories" value={formData.categories} onChange={handleChange}>
          {category.map((ele) => {
            return (
              <option name={ele} value={ele} key={ele}>
                {ele}
              </option>
            );
          })}
        </select>
        <input
          type="checkbox"
          name="isCompleted"
          checked={formData.isCompleted}
          onChange={handleChange}
        />

        <button onClick={handleToggle}>Cancel</button>
        <button>Save</button>
      </form>
    </div>
  );
};

export default EditTask;
