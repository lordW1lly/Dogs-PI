import { NavBar } from "../NavBar/NavBarBTS";
import { AllFiltersButtos } from "../Filters/AllFiltersButtons";
import { useDispatch, useSelector } from "react-redux"
import { CardContainer } from "../CardsContainer/CardsContainer";



export function Home () {

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogsLoaded)

    return (
        <>
        <NavBar/>
        <AllFiltersButtos/>
        <CardContainer/>
        </>
    )
}