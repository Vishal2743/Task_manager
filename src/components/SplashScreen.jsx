import noProject from "../assets/no-projects.png";
import Buttons from "./Buttons.jsx";

export default function SplashScreen({onClickHandler}) {
    return <div className="mt-24 text-center w-2/3">
        <img src={noProject} alt="An empty tasklist" className="h-16 w-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-stone-500 dark:text-stone-300 my-4">No project selected</h2>
        <p className="text-stone-400 mb-4" >Select a project or get started with a new one</p>
        <p className="mt-8" >
            <Buttons onClick={onClickHandler} >Create New Project</Buttons>
        </p>
    </div>
}