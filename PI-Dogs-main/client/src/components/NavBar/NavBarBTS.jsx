import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs, getTemperaments } from '../../actions';
import './NavBar.css'
import { SearchBar } from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import { Filters } from '../Filters/Filters';


export function NavBar() {

    const dispatch = useDispatch();
    let location = useLocation();



    return (
        <>

            <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class='noDeco' exact to="/dogs" onClick={() => dispatch(getDogs())} >
                        <a class="navbar-brand">ThePerritosApp</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
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

                            <li class="nav-item">
                                <Link to="/dogB" class='noDeco' onClick={() => dispatch(getTemperaments())} >
                                    <a class={location.pathname === '/dogB' ? "nav-link active" : 'nav-link'}>Create BreedBTS</a>
                                </Link>
                            </li>

                            {/* <li class="nav-item dropdown dropdown-menu-dark">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="collapse" data-bs-target="#filters" aria-expanded="false">
                                Filters
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" id='filters' aria-labelledby="navbarDropdown">
                                
                                <Filters />


                            </ul>
                        </li> */}

                            {/*  <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disableddddd</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">TopBar</a>
                            </li>


                        </ul>
                        <form class="d-flex" role='search'>
                            <SearchBar class="form-control me-2" type="search" aria-label="Search" ></SearchBar>

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
                    <Filters />
                </div>
            </div>
        </>
    )
}

