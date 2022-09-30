import { NavBar } from "../NavBar/NavBarBTS";
import { AllFiltersButtos } from "../Filters/AllFiltersButtons";

import { CardContainer } from "../CardsContainer/CardsContainer";



export function Home () {

   

    return (
        <>
        <div>
        <NavBar/>
        </div>


        <div>
        <AllFiltersButtos/>
        </div>
        <div class='container-fluid'>
        <CardContainer/>
        </div>
        </>

    )
}