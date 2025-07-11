function Resume({ data }) {
  return (
    <>
      <div className="name-wrapper">
        <h2>
          {data.firstName} {data.lastName}
        </h2>
      </div>

      <div>
        <p>{data.school}</p>
        <p>{data.title}</p>
        <p>{data.eduDate}</p>
      </div>

      <div>
        <p>{data.company}</p>
        <p>{data.position}</p>
        <p>{data.responsibilities}</p>
        <p>{data.jobDate}</p>
      </div>
    </>
  );
}

export default Resume;
