import "../styles/about.scss"

function About(): JSX.Element {
    return (
        <div className="about">
            <span className="greeting">Hey, my name is</span>
            <span className="name">Samiul Hoque.</span>
            <span className="statement">I am <span className="joke">(trying to be)</span> <br /> a software engineer.</span>

            <span className="bio">
                I'm a junior attending Carnegie Mellon University.
                I specialize in developing full stack applications like my iOS app, Hourly.
                I just finished my summer 2022 internship at Erie Insurance, and I am searching for my summer 2023 internship.
            </span>
        </div>
    )
}

export default About