import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs, getTemperaments, reset, searchDog } from '../../actions';
import './NavBar.css'
import { SearchBar } from '../SearchBar/SearchBar';

export function NavBar() {

    const dispatch = useDispatch();
   

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">ThePerritosApp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class='noDeco' exact to="/dogs" onClick={() => dispatch(getDogs())} >
                            <a class="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/dog" class='noDeco' onClick={() => dispatch(getTemperaments())} >
                            <a class="nav-link">Create Breed</a>
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filters
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <SearchBar class="form-control me-2" type="search" aria-label="Search" ></SearchBar>
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    )
}

