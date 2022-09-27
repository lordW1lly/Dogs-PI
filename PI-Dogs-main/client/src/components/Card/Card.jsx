import './Card.css'
export function Card(props) {

    const { dog } = props

    return (
        <>
            <div class="col">

                <div class="card">
                    <picture>
                        <img src={dog.image} class="card-img-top " alt="..." />

                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">{dog.name}</h5>
                        <p class="card-text">{dog.temperament}</p>
                        <p class="card-text">{dog.weight}</p>


                    </div>
                </div>
            </div>


        </>

    )
}
