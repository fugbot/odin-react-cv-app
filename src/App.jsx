import { useState } from "react";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/Resume.css";
import Form from "./components/Form";
import Resume from "./components/ResumeDisplay";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhone } from "@mdi/js";

function App() {
  const [generalFormData, setGeneralFormData] = useState(null);
  const [educationFormData, setEducationFormData] = useState(null);
  const [jobFormData, setJobFormData] = useState(null);

  return (
    <div className="app-container">
      <div className="wrapper forms">
        <div className="form-container" id="general-form">
          <Form
            title="Personal Details"
            autoComplete="on"
            fields={[
              {
                id: "firstName",
                name: "firstName",
                type: "text",
                label: "First Name: ",
              },
              {
                id: "lastName",
                name: "lastName",
                type: "text",
                label: "Last Name: ",
              },
              {
                id: "email",
                name: "email",
                type: "email",
                label: "Email: ",
              },
              {
                id: "phone",
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
                name: "eduDate",
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
                id: "job-responsibilities",
                name: "responsibilities",
                type: "text",
                label: "Responsibilities: ",
              },
              {
                id: "job-date",
                name: "jobDate",
                type: "date",
                label: "Date: ",
              },
            ]}
            onSubmit={setJobFormData}
          ></Form>
        </div>
      </div>
      <div className="wrapper resume">
        <div className="resume personal section">
          {generalFormData && <Resume data={generalFormData} />}
          {generalFormData && (
            <>
              <div className="contact-section">
                {generalFormData.email && (
                  <div className="email-wrapper">
                    <Icon path={mdiEmailOutline} size={1} />
                    <p>{generalFormData.email}</p>
                  </div>
                )}
                {generalFormData.phone && (
                  <div className="phone-wrapper">
                    <Icon path={mdiPhone} size={1} />
                    <p>{generalFormData.phone}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="resume education section">
          {educationFormData && <Resume data={educationFormData} />}
          {educationFormData && <hr />}
        </div>
        {jobFormData && <Resume data={jobFormData} />}
      </div>
    </div>
  );
}

export default App;
