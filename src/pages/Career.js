import { Link, useLoaderData } from "react-router-dom";



const Career = () => {
  const careers = useLoaderData();

  return (
    <div>
      <h1>Career List</h1>
      {careers.map((career) => (
        <Link to={career.id} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

//loader function
export const careerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  
   
  if(!res.ok) {
      throw Error ('Could not find that career');
  }
  
  return res.json(); 
};

export default Career;
