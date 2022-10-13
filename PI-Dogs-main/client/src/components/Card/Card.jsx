import { Link } from 'react-router-dom'
import './Card.css'
export function Card(props) {

    const { dog } = props

    return (
        <>
            <div class="col">
                <Link to={`/dogs/${dog.id}`} class='noDeco' >

                    <div class="card h-100">
                        <picture class='pictureSize'>
                            <img src={dog.image} class="card-img-top pictureSize " alt="..." />
                        </picture>
                        <div class="card-body">

                            <h5 class="card-title">{dog.name}</h5>
                            <p class="card-text">{dog.temperament}</p>
                            <p class="card-text">{dog.weight} kgs.</p>


                        </div>
                    </div>
                </Link>
            </div>


        </>

    )
}
