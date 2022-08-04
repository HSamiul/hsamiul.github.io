import "../styles/app.scss"
import About from "./about";
import Hourly, { ProjectsDivider } from "./hourly";
import NavigationBar from "./navigationBar";
import PedPal from "./pedpal";

export function App(): JSX.Element {
    return (
        <div className="app">
            <NavigationBar></NavigationBar>
            
            <About />
            <ProjectsDivider />
            <Hourly />
            <PedPal />
        </div>
    )
}