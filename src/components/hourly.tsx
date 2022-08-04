import "../styles/hourly.scss"
// import hourlyImage from "../../public/hourlyImage.png"

export function ProjectsDivider(): JSX.Element {
    return (
        <div className="projectsDivider">
            <span className="blip">•</span>
            <span className="text">Projects <span className="joke"> (I actually committed to)</span></span>
            <div className="divider"></div>
        </div>
    )
}

function Hourly(): JSX.Element {
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

export default Hourly