import "../styles/app.scss"
import About from "./about";
import NavigationBar from "./navigationBar";
import { ProjectsDivider, Hourly, PedPal } from "./projects";

export function App(): JSX.Element {
    return (
        <div className="app">
            <NavigationBar />

            <div className="content">
                <About />
                <ProjectsDivider />

                    <div className="projects">
                        <Hourly />
                        <PedPal />
                    </div>
                <div className="content"></div>
            </div>
        </div>
    )
}