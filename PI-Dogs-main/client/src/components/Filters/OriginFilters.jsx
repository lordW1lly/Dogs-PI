import { useDispatch } from "react-redux";
import { filterByApi, filterByDB, allOrigins } from './../../actions/index'


export function OriginFilter () {
    const dispatch = useDispatch()
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
                <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Origin
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><button class="dropdown-item" value='API' onClick={orderOrigin}>API</button></li>
                    <li><button class="dropdown-item" value='D.Base' onClick={orderOrigin}>D.Base</button></li>
                    <li><button class="dropdown-item" type="button" value='allOrigins' onClick={orderOrigin}>allOrigins</button></li>
                    
                </ul>
            </div>
        </>
        
    )

}
