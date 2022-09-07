import { useEffect} from "react";
import { useParams } from 'react-router-dom';
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
    <div className="dogDetail">
        <ul>
        <h1>{dogID.name}</h1>
            <div className="dogImg">
                <img src={dogID.image}></img>

            </div>
        <ul>
            <h3>{dogID.temperament}</h3>
            <h3>Weight: {dogID.weight} kgs</h3>
            <h3>Height: {dogID.height} cms</h3>
            <h3>{dogID.lifeSpan}</h3>

        </ul>

        </ul>
       
    </div>
   )
   
} 