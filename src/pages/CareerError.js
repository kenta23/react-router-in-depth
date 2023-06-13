import { Link, useRouteError } from "react-router-dom"

export default function CareerError () {
    const error = useRouteError()
    return (
        <div>
          <h1>Error</h1>     
          <p>{error.message}</p>
          <p> Go back to <Link to='/'>Homepage</Link></p>
       </div>
    )
}