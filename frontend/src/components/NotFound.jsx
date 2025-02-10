import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
        <h1>page not found</h1>
        <Link to={`/`}>Home</Link>
        </>
    )
}