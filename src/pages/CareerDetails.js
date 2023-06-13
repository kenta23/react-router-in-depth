import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails () {
    const { id } = useParams()
    const careerDetails = useLoaderData();
    
    return (
        
   <div className="career-details">
        <h1>Job listed</h1>
        <p>Job: {careerDetails.title}</p>
        <p>Sallary: {careerDetails.sallary}</p>
        <p>Location: {careerDetails.location}</p>    
  </div>
    )
}

export const careerDetailsLoader = async ({ params }) => {
     const { id } = params
     const res = await fetch("http://localhost:4000/careers/ " + id);
     
      if(!res.ok) {
         throw Error('Could not find that career');
     }
     
     
     return res.json();
     
    
};