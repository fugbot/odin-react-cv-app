function Resume({ data }) {
  console.log("resume", data);
  return (
    <>
      <div>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>

      <div>
        <p>{data.school}</p>
        <p>{data.title}</p>
        <p>{data.date}</p>
      </div>
    </>
  );
}

export default Resume;
