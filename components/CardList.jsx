import Card from './Card'
import Data from '../Data'

export default function CardList(){
    const cards = Data.map((item)=>{
        return <Card
                    key={item.location}
                    {...item}
                />
    })

    return(
        <div className="card-list">
            {cards}
        </div>
    )
}
