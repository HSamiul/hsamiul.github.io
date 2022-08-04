import "../styles/hourly.scss"
// import hourlyImage from "../../public/hourlyImage.png"

function PedPal(): JSX.Element {
    return (
        <div className="project">
            <span className="title">Project Spotlight</span>
            <span className="name">PedPal</span>

            <div className="description">
                <span className="details">
                    A standalone navigation app. 
                    View your current location and watch it update in real time.
                    Search for locations using natural language like "coffee shops" or "61A bus stop".
                    Get a route to your destination along with a directions itinerary and ETA, all with the press of a button.
                </span>

                <img className="image" src="/hourlyImage.png" />
            </div>
        </div>
    )
}

export default PedPal