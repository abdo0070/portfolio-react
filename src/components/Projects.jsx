import { PROJECTS } from "../constants";
import Project from "./Project";

const Projects = () => {

    return (
        <div className="w-full text-white" id="projects">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-2 gap-1">
                {
                    PROJECTS.map((p) => {
                        return <Project project={p} key={p.id} />
                    })
                }
            </div>
        </div>
    )
}
export default Projects;