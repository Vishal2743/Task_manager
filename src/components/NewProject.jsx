import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ cancelHandler, saveHandler }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    let content;

    function validateSave() {
        if (title.current.value && description.current.value && dueDate.current.title) {
            return true;
        }
        content = <p>Fill all the fields!</p>
        return false;
    }

    return <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-200 hover:bg-stone-300 px-3 py-1.5 rounded-md" onClick={cancelHandler}>
                    Cancel
                </button>
            </li>
            <li>
                <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-1.5 rounded-md dark:bg-stone-500"
                    onClick={() => {
                        saveHandler(
                            title.current.value,
                            description.current.value,
                            dueDate.current.value
                        )
                    }}
                >
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input ref={title} title="Title" />
            <Input ref={description} title="Description" isTextArea />
            <Input ref={dueDate} title="Due Date" type="date" />
            { }
        </div>
    </div>
}