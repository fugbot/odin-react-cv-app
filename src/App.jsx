import { useState } from "react";
import "./styles/App.css";
import Form from "./components/Form";
import General from "./components/GeneralForm";
import Resume from "./components/ResumeDisplay";
import Education from "./components/EducationForm";

function App() {
  const [generalFormData, setGeneralFormData] = useState(null);
  const [educationFormData, setEducationFormData] = useState(null);

  console.log(generalFormData);
  console.log(educationFormData);
  return (
    <>
      <div className="form-container" id="general-form">
        <Form
          title="General"
          fields={[
            {
              id: "first-name",
              name: "firstName",
              type: "text",
              label: "First Name: ",
            },
            {
              id: "last-name",
              name: "lastName",
              type: "text",
              label: "Last Name: ",
            },
            {
              id: "user-email",
              name: "email",
              type: "email",
              label: "Email: ",
            },
            {
              id: "user-phone",
              name: "phone",
              type: "tel",
              label: "Phone: ",
            },
          ]}
          onSubmit={setGeneralFormData}
        ></Form>
      </div>
      <div className="form-container" id="education-form">
        <Form
          title="Education"
          fields={[
            {
              id: "edu-school",
              name: "school",
              type: "text",
              label: "School: ",
            },
            {
              id: "edu-title",
              name: "title",
              type: "text",
              label: "Title: ",
            },
            {
              id: "edu-date",
              name: "date",
              type: "date",
              label: "Date: ",
            },
          ]}
          onSubmit={setEducationFormData}
        ></Form>
      </div>
      <div className="form-container" id="job-form">
        <Form
          title="Job Experience"
          fields={[
            {
              id: "job-company",
              name: "company",
              type: "text",
              label: "Company: ",
            },
            {
              id: "job-position",
              name: "position",
              type: "text",
              label: "Position: ",
            },
            {
              id: "job-responsibility",
              name: "responsibility",
              type: "date",
              label: "Responsibilities: ",
            },
            {
              id: "job-date",
              name: "date",
              type: "date",
              label: "Date: ",
            },
          ]}
          onSubmit={setEducationFormData}
        ></Form>
      </div>
      <h1>Resume</h1>

      {generalFormData && <Resume data={generalFormData} />}
      {educationFormData && <Resume data={educationFormData} />}
    </>
  );
}

export default App;
