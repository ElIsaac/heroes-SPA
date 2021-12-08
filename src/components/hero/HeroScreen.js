import React, { useMemo } from 'react'
import { useParams, useNavigate ,Navigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroByID'

export const HeroScreen = () => {
    const {heroid}=useParams()
    const navigate=useNavigate()


    const hero = useMemo(() => getHeroById(heroid), [heroid])
    if(!hero){
        return <Navigate to="/"/>
    }
    const handleReturn=(e)=>{
        e.preventDefault()
        navigate(-1)
    }

    const imagePath= `/assets/${hero.id}.jpg`

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imagePath} alt={hero.superhero} className="img-thumbnail"  />
            </div>

            <div className="col-8">
                <h3>
                    {hero.superhero}
                </h3>
                <ul className="list-group ">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance:</b> {hero.first_appearance}
                    </li>
                    <hr />
                </ul>
                <h5>Characteres</h5>
                <p>{hero.characters}</p>
                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Informacion
                </button>
            </div>
        </div>
    )
}
