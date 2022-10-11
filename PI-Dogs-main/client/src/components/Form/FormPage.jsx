import { NavBar } from "../NavBar/NavBarBTS";
import { FormBTS } from "./FormBts";
import { TempsForm } from "./TempsForm";
import { getTemperaments } from "../../actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function FormPage () {

    useEffect( () => {
        dispatch(getTemperaments())
    },[])

    const dispatch = useDispatch()
    return (
    <>
    <div>
        <NavBar/>
    </div>
    <div>
        <FormBTS/>
        <TempsForm/>
    </div>
    </>)
}