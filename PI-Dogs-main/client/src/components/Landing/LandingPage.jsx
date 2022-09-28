import { Link } from 'react-router-dom';
import './LandingStyles.css';

export default function LandingComponent () {
    return (
        <div className="bou">
            <button>
                <Link exact to="/dogs" >Home</Link>
                </button>
        </div>
    )

       
}