import { orderWeightASC, orderWeightDESC } from "../../actions"
import { useDispatch } from "react-redux"


export function OrderWeight() {
    const dispatch = useDispatch()

    const orderWeight = (e) => {
        if (e.target.value === 'Asc') {
            return dispatch(orderWeightASC())
        }
        if (e.target.value === 'Desc') {
            return dispatch(orderWeightDESC())
        }
    }
    return (
        <>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Order Weight
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><button class="dropdown-item" value='Asc' onClick={orderWeight}>Lowest to Highest</button></li>
                    <li><button class="dropdown-item" type="button" value='Desc' onClick={orderWeight}>Highest to Lowest </button></li>

                </ul>
            </div>
        </>
    )
}
