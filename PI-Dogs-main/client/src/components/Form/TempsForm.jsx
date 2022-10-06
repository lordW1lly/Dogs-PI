import { useState } from "react"
import { useSelector } from "react-redux"


export function TempsForm () {
    const temps = useSelector(state => state.temperaments)


    return (
        <>
        <div class=" card card-body dark">
                    <div class="container text-center">
                        <div class="row row-cols-auto">

                            {
                                temps.map((temp) =>
                                (
                                    <div class="col">
                                        <li class=" form-check" key={temp.id}>
                                            <input class="form-check-input" key={temp.id} type="checkbox" value={temp.name}
                                                /* onChange={handleTempis} */ id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                {temp.name}
                                            </label>
                                        </li>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}