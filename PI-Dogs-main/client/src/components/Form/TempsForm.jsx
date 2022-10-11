import { useState } from "react"
import { useSelector } from "react-redux"
import './Form.css'


export function TempsForm() {
    const temps = useSelector(state => state.temperaments)
    const [selectedTemps, setSelectedTemps] = useState([])

    const handleTemps = (e) => {
        setSelectedTemps([...selectedTemps, e.target.value])
    }

    const onClose = (e) => {
        let newTemps = selectedTemps.filter(selected => selected !== e.target.value)
        setSelectedTemps(newTemps)

    }


    return (
        <div class='container'>
            <div class="card card-body dark">
                <div class="container-fluid text-center">
                    <div class='container-fluid mb-2 selectedTempscontainer'>
                        {
                            selectedTemps.map(temp => {

                                return (
                                    <div key={temp}>
                                        <ul>
                                            <span key={temp} class="btn btn-dark selectedTempsbtns" value={temp}>{temp}
                                                <button type="button" value={temp} onClick={onClose} class="badge btn btn-outline-danger  selectedTemps">X</button>
                                            </span>

                                        </ul>
                                        {/* <button type="button" key={temp} value={temp} onClick={onClose} class="btn btn-dark btn-sm">{temp}
                                        <button type="button" value={temp} onClick={onClose} class="badge">x</button>
                                        </button> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div class="container text-center  ">

                    <div class="row row-cols-auto">

                        {
                            temps.map((temp) =>
                            (
                                <div class="form-check selectores" key={temp.id}>

                                <div class="col" key={temp.id}>
                                    <li class="selectores form-check" key={temp.id}>
                                        {selectedTemps.includes(temp.name) ? <input class="form-check-input selectores" key={temp.id} type="checkbox" value={temp.name} onChange={handleTemps} id="flexCheckDefault" checked/> : <input class="form-check-input selectores" key={temp.id} type="checkbox" value={temp.name} onChange={handleTemps} id="flexCheckDefault"/> }
                                        <label class="form-check-label" for="flexCheckDefault">
                                            {temp.name}
                                        </label>
                                    </li>
                                </div>
                                </div>
                            )
                            )
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}