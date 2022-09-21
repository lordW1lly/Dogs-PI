import { useDispatch } from "react-redux"
import { orderNameAZ, orderNameZA } from "../../actions"

export function BreedFilter() {
    const dispatch = useDispatch()

    const orderBreed = (e) => {
        if ((e.target.value) === 'Asc') {
            return dispatch(orderNameAZ())
        };
        if ((e.target.value) === 'Desc') {
            return dispatch(orderNameZA())
        };

    }
    return (
        <>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
