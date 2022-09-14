import {
    getDogs, reset, getTemperaments, filterByTemps,
    orderNameZA, orderNameAZ,
    orderWeightDESC, orderWeightASC, filterByApi, filterByDB, allOrigins
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export function Filters() {

    const temperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()

    const orderBreed = (e) => {
        if ((e.target.value) === 'Asc') {
            return dispatch(orderNameAZ())
        };
        if ((e.target.value) === 'Desc') {
            return dispatch(orderNameZA())
        };

    }

    const orderWeight = (e) => {
        if (e.target.value === 'Asc') {
            return dispatch(orderWeightASC())
        }
        if (e.target.value === 'Desc') {
            return dispatch(orderWeightDESC())
        }
    }



    const orderOrigin = (e) => {

        if (e.target.value === 'API') {
            return dispatch(filterByApi())
        }

        if (e.target.value === 'D.Base') {
            return dispatch(filterByDB())
        }

        if (e.target.value === 'allOrigins') {
            return dispatch(allOrigins())
        }
    }
    return (
        <>
            <div className="selectTemp">
                <ul class="navbar-nav navbar-dark bg-dark /* me-auto mb-2 mb-lg-0 */">
                    <li class="nav-item">
                        <button onClick={() => dispatch(getDogs())}>Clear Selection</button>
                    </li>
                    <li class="nav-item ">
                        <select class="form-select" onChange={orderBreed} value=''>
                            <option selected>Order by name</option>

                            <option value=''  >Order by Name</option>
                            <option value='Asc'>Ascendente</option>
                            <option value='Desc'>Descendente</option>
                        </select>
                    </li>


                    <li class="nav-item">
                        <select class="form-select" multiple onChange={orderOrigin} defaultValue='allOrigins'>
                            <option value='allOrigins'>All Origins</option>
                            <option value='API'>API</option>
                            <option value='D.Base'>Created</option>
                        </select>
                    </li>
                    <li class="nav-item">
                        <select class="form-select" onChange={orderWeight} value=''>
                            <option value=''  >Order by Weight</option>
                            <option value='Asc'>Ascendente</option>
                            <option value='Desc'>Descendente</option>
                        </select>
                    </li>
                    <li class="nav-item">
                        <select class="form-select" onChange={(e) => dispatch(filterByTemps(e.target.value))}>
                            <option value=''>Filter by Temperament</option>
                            {
                                temperaments.map(temp => (
                                    <option key={temp.id} value={temp.name}>Filter by temperament: {temp.name}</option>
                                ))
                            }


                        </select>
                    </li>
                </ul>

            </div>
        </>
    )
}
