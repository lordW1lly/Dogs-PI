import { useEffect} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogID } from "../../actions";

export default function DogDetail() {
    let { id } = useParams()
    const dispatch = useDispatch();
    const dogID = useSelector(state => state.dogID)

    useEffect(  () => {
        dispatch(getDogID(id))
        //console.log('entro useEffect')
       },[])

   return(
    <div>
        <ul>
        <h1>{dogID.name}</h1>
            <div className="dogImg">
                <img src={dogID.image}></img>

            </div>
        <ul>
            <h3>{dogID.temperament}</h3>
            <h3>Weight: {dogID.weight}</h3>
            <h3>Height: {dogID.height}</h3>
            <h3>{dogID.life_span}</h3>

        </ul>

        </ul>
       
    </div>
   )
   
} 