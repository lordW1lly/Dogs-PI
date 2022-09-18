import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions";
import { useEffect } from "react";

export function FilterTemps() {

    useEffect(() => {

        dispatch(getTemperaments())
        //console.log('entro useEffect')
    }, [])
    const temps = useSelector(state => state.temperaments)
    const dispatch = useDispatch()


    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#filterTemps" aria-expanded="false" aria-controls="filterTemps">
                Temps
            </button>
            <div class="collapse" id="filterTemps">
                <div class="card card-body">



                    {
                        temps.map(temp =>
                        (
                            <div class="form-check" key={temp.id}>
                                <input class="form-check-input" type="checkbox" value={temp.name} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {temp.name}
                                </label>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

