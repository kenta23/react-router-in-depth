import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <>
         <h1>404 Page not Found </h1>
         <p> industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s, when an unknown printer took a galley of type and scrambled
         it to make a type specimen book. It has survived not only five centuries, but
         also the leap into electronic typesetting, remaining essentially unchanged </p>
         
         <p>Go back to <Link to='/'>Homepage </Link></p>
        
        </>
    )
}