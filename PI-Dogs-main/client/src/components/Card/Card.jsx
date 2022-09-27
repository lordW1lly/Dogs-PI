
export function Card(props) {

    const { dog } = props

    return (
        <>

            <div class="card">
                <img src={dog.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{dog.name}</h5>
                    <p class="card-text">{dog.temperament}</p>
                    <p class="card-text">{dog.weight}</p>
                    
                    
                </div>
            </div>
        </>

    )
}
