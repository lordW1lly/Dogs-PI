import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs, getTemperaments, reset, searchDog } from '../../actions';
import './NavBar.css'
import { SearchBar } from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import { Filters } from '../Filters/Filters';

export function NavBar() {

    const dispatch = useDispatch();
    let location = useLocation();



    return (
        <>

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
                                <a class={location.pathname === '/dogs' ? "nav-link active" : 'nav-link'}/*  */ aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dog" class='noDeco' onClick={() => dispatch(getTemperaments())} >
                                <a class={location.pathname === '/dog' ? "nav-link active" : 'nav-link'}>Create Breed</a>
                            </Link>
                        </li>
                        
                        <li class="nav-item dropdown dropdown-menu-dark">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="collapse" data-bs-target="#filters" aria-expanded="false">
                                Filters
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" id='filters' aria-labelledby="navbarDropdown">
                                {/* <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                <Filters />


                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">TopBar</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <SearchBar class="form-control me-2" type="search" aria-label="Search" ></SearchBar>
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
                
            </div>
        </nav>
        <div class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasTopLabel">Filters</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <Filters/>
                    </div>
                </div>
        </>
    )
}

