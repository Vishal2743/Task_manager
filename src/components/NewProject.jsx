import { useRef, useState } from "react";
import Input from "./Input.jsx";

export default function NewProject({ cancelHandler, saveHandler }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const [isInvalid, setIsInvalid] = useState({
        isTitleError: undefined,
        isDescriptionError: undefined,
        isDueDateError: undefined
    });

    function validateSave() {
        const titleValue = title.current.value;
        const descriptionValue = description.current.value;
        const dueDateValue = dueDate.current.value;

        const isTitleError = /^\s*$/.test(titleValue);
        const isDescriptionError = /^\s*$/.test(descriptionValue);
        const isDueDateError = /^\s*$/.test(dueDateValue);

        setIsInvalid({
            isTitleError,
            isDescriptionError,
            isDueDateError,
        });

        if (isTitleError || isDescriptionError || isDueDateError) {
            return;
        }

        saveHandler(titleValue, descriptionValue, dueDateValue);
    }

    function handleChange(type) {
        if (type === 'Title') {
            setIsInvalid(curr => ({
                ...curr,
                isTitleError: false,
            }));
        }
        if (type === 'Description') {
            setIsInvalid(curr => ({
                ...curr,
                isDescriptionError: false,
            }));
        }
        if (type === 'Due Date') {
            setIsInvalid(curr => ({
                ...curr,
                isDueDateError: false,
            }));
        }
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
                    onClick={validateSave}>
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input ref={title} title="Title" isError={isInvalid.isTitleError} onInputChange={handleChange} />
            <Input ref={description} title="Description" isTextArea isError={isInvalid.isDescriptionError} onInputChange={handleChange} />
            <Input ref={dueDate} title="Due Date" type="date" isError={isInvalid.isDueDateError} onInputChange={handleChange} />
            {(isInvalid.isTitleError || isInvalid.isDescriptionError || isInvalid.isDueDateError) && <p>Invalid Input</p>}
        </div>
    </div>
}