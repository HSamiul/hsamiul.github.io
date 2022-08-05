import "../styles/projects.scss"

export function ProjectsDivider(): JSX.Element {
    return (
        <div className="projectsDivider">
            <span className="blip">•</span>
            <span className="text">Projects <span className="joke"> (I actually finished)</span></span>
            <div className="divider"></div>
        </div>
    )
}

export function Hourly(): JSX.Element {
    return (
        <div className="project">
            <span className="title">Project Spotlight</span>
            <span className="name">Hourly</span>

            <div className="description">
                <span className="details">
                    An iOS app built to organize your day. 
                    It's simple in design yet highly customizable.
                    Create "events" throughout your day and get notified when they're happening.
                    Make the app yours with from color preferences to font choice.
                    Never miss a  beat - all events and preferences are autosaved the moment you set them. 
                </span>

                <img className="image" src="/hourlyImage.png" />
            </div>
        </div>
    )
}

export function PedPal(): JSX.Element {
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