import locationLogo from '../images/location-logo.png'

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} className="card-image"/>
            <div className="card-content">
                <div className='card-content-head'>
                    <img src={locationLogo} />
                    <span className='card-country'>{props.location.toUpperCase()}</span>
                    <span><a href={props.googleMapsUrl}>View on Google maps</a></span>
                </div>
                <h1 className='card-title'>{props.title}</h1>
                <h3 className='card-date'>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}