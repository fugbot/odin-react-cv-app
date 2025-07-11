import { useState } from "react";
import Input from "./Input";
import "../styles/index.css";

export default function Form({ title, fields, onSubmit }) {
  //creates initial form data
  const [formData, setFormData] = useState(
    fields.reduce((accumulator, field) => {
      accumulator[field.name] = field.defaultValue || "";
      return accumulator;
    }, {})
  );

  function handleChange(name, value) {
    //input name
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData); //sends data to parent
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{title}</h2>
      {fields.map((field) => (
        <Input
          key={field.id}
          label={field.label}
          id={field.id}
          name={field.name}
          type={field.type}
          value={formData[field.value]}
          onChange={handleChange}
          labelClassName="input-label"
          inputClassName="input-field"
          wrapperClassName="input-wrapper"
        ></Input>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
