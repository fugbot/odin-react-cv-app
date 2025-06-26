import Input from "./Input";
import { useState } from "react";
import "../styles/index.css";

export default function General({ submittedFormData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [submittedFormData, setSubmittedFormData] = useState(null);

  function handleChange(event) {
    //input name
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedFormData(formData);
  }

  return (
    <div className="form-container">
      <span>General</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">
            First Name:{" "}
            <Input
              id="first-name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            ></Input>
          </label>
        </div>
        <div>
          <label htmlFor="last-name">
            Last Name:{" "}
            <Input
              id="last-name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            ></Input>
          </label>
        </div>
        <div>
          <label htmlFor="user-email">
            Email:{" "}
            <Input
              id="user-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            ></Input>
          </label>
        </div>
        <div>
          <label htmlFor="user-phone">
            Phone:{" "}
            <Input
              id="user-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            ></Input>
          </label>
        </div>
        <button type="submit">Edit </button>
        <button type="submit">Submit</button>
      </form>
      {submittedFormData && (
        <div>
          <p>
            {submittedFormData.firstName + " " + submittedFormData.lastName}{" "}
            <p>{submittedFormData.email}</p>
            <p>{submittedFormData.phone}</p>
          </p>
        </div>
      )}
    </div>
  );
}
