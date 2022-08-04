import "../styles/navigationBar.scss"
import { faS } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NavigationBar(): JSX.Element {
    return (
        <div className="navigationBar">
            <span className="logo">SH</span>

            <div className="items">
                <a href="" className="item">About</a>
                <a href="" className="item">Experience</a>
                <a href="" className="item">Projects</a>
                <a href=""  className="item">Contact</a>
                <a target="_blank" href="/Samiul-Hoque-Resume.pdf" className="resume item">Resume</a>
            </div>
        </div>
    )
}

export default NavigationBar