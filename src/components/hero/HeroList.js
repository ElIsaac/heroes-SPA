
import { useMemo } from "react"
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({ publisher }) => {

    const heros = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <div className="">
            <h1>hero List - {publisher} </h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3">
            
            
            
                {
                    heros.map(hero => (
                        <HeroCard key={hero.id} 
                        {...hero}
                        >
                            {hero.superhero}
                        </HeroCard>
                    ))
                }
                
            
        </div>
        </div>
    )
}
