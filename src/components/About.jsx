import { HERO } from "../constants";

const About = () => {
    return (
        <div className="w-full h-fit flex flex-row justify-between p-2 bg-black-dark">

            <div className="w-full sm:w-9/12 ml-4">
                <h2 className="text-lg font-semibold mb-2 mt-1">{HERO.greet}</h2>
                <p className="f
                -ont-thin">
                {HERO.description}
                </p>
            </div>

            <div className="h-full w-3/12 relative hidden sm:block">
                <div className="rotate-45 absolute right-6 top-6 p-2 border-2 border-black rounded-tr-3xl rounded-bl-3xl">
                    <h2 className="font-bold font-mono text-8xl">IT</h2>
                </div>
            </div>
        </div>

    )
}

export default About;