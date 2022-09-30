import { Link } from 'react-router-dom';
import './LandingStyles.css';

export default function LandingComponent () {
    return (
        <div className="bou">
            <Link exact to="/dogs" >
            <button type="button" class="btn  btn-dark btn-lg noDecos ">
                Home
                </button>
                </Link>
        </div>
    )

       
}