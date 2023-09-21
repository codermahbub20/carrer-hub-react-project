import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div >
            <h1>Opppssss !!!!!!!!!!!!!!!!!!</h1>
            <button className="btn btn-primary"><Link to="/">Go Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;