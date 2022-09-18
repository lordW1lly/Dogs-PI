import { BreedFilter } from "./BreedFilter";
import { OriginFilter } from "./OriginFilters";
import { OrderWeight } from "./OrderWeight";
import { FilterTemps } from "./FilterTemps";

export function AllFiltersButtos () {
    return (
        <div>
        <FilterTemps />
        <OrderWeight />
        <OriginFilter />
        <BreedFilter />

    </div>
    )
}
   