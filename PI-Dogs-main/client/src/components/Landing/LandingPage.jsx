import { Link } from 'react-router-dom';
import './LandingStyles.css';
import { getTemperaments } from '../../actions';
import { useDispatch } from 'react-redux'

export default function LandingComponent() {
    const dispatch = useDispatch()
    return (
        <div className="bou">
            <Link exact to="/dogs" >
                <button type="button" onClick={() => dispatch(getTemperaments())} class="btn  btn-dark btn-lg noDecos ">
                    Home
                </button>
            </Link>
        </div>
    )


}