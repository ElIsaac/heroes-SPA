import { Link } from "react-router-dom"

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    return (
        <div className="col">


            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={`/assets/${id}.jpg`} alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{id}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Publisher: {publisher}</li>
                    <li className="list-group-item">alter ego: {alter_ego}</li>
                    <li className="list-group-item">Primera aparicion: {first_appearance}</li>
                    {
                        (alter_ego!==characters)&&
                        <li className="list-group-item">Actor: {characters}</li>
                    }
                    <div className="card-body">
                        <Link to={`/hero/${id}`}>
                             mas info
                        </Link>
                    </div>
                </ul>
                
            </div>
        </div>
    )
}
