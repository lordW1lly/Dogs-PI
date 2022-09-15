import { useDispatch } from "react-redux";
import { filterByApi, filterByDB, allOrigins } from './../../actions/index'


export function OriginFilter () {
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
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Order Breed
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><button class="dropdown-item" value='Asc' onClick={orderBreed}>Order A - Z</button></li>
                    <li><button class="dropdown-item" type="button" value='Desc' onClick={orderBreed}>order Z - A</button></li>
                    
                </ul>
            </div>
        </>
        
    )

}
