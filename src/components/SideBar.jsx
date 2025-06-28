import Buttons from "./Buttons.jsx";

export default function SideBar({ onClickHandler, projects, onClickProjectHandler }) {
    return <aside className="mt-8 w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <Buttons onClick={onClickHandler}>+ Add Project</Buttons>
            <div className="mt-8 h-5/6 overflow-y-scroll scrollbar-hide">
                {projects.length > 0 &&
                    projects.map((project) => {
                        return <li key={project.title} className="list-none mb-1">
                            <div className="hover:bg-stone-800 hover:rounded-xl transition duration-75 capitalize pl-1.5 pb-1.5 pt-0.5" onClick={() => onClickProjectHandler(project.title)}>
                                <p className="cursor-pointer">{project.title}</p>
                            </div>
                        </li>
                    })
                }
            </div>
    </aside>
}