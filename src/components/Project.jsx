import { useRef, useState } from "react";
import Input from "./Input";

export default function Project({ contentObject, addTaskHandler, cancelTaskHandler, deleteProjectHandler }) {
    const date = new Date(contentObject.dueDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    const taskItem = useRef();
    const [isInvalid, setIsInvalid] = useState(false);

    function addTaskClick() {
        const taskItemRef = taskItem.current.value;
        if (/^\s*$/.test(taskItemRef)) {
            setIsInvalid(curr => true);
            return;
        }
        addTaskHandler(taskItem.current.value);
        taskItem.current.value = '';
    }

    function handleTaskInputChange(type) {
        setIsInvalid(curr => false);
    }

    return <div className="flex flex-col w-[35rem] mt-16 dark:text-stone-300">
        <div className="flex flex-row justify-between mb-2">
            <h2 className="text-3xl font-bold capitalize">{contentObject.title}</h2>
            <button className="text-stone-800 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-200 hover:bg-stone-300 px-3 py-1.5 rounded-md" onClick={() => deleteProjectHandler(contentObject.id)}>
                Delete
            </button>
        </div>
        <p className="dark:text-gray-400 mb-6 pl-1">{formatted}</p>
        <p className="dark:text-gray-400 mb-5 whitespace-pre-line">{contentObject.description}</p>
        <hr className="border-t-2 border-stone-400 w-full mb-5" />
        <h2 className="text-3xl font-bold mb-4">Tasks</h2>
        <div className="flex gap-8 items-center w-full">
            <Input ref={taskItem} isError={isInvalid} onInputChange={handleTaskInputChange}></Input>
            <button className="hover:bg-stone-200 p-2 rounded-xl"
                onClick={addTaskClick}>
                Add Task
            </button>
        </div>
        {isInvalid && <p>Invalid input</p>}
        {contentObject.tasksList.length > 0 && <div className="flex flex-col w-full mt-5 bg-stone-200 px-2 py-1.5 rounded-xl overflow-y-scroll scrollbar-hide h-72">
            {(contentObject.tasksList).map((task, index) => {
                return <div key={index} className="flex justify-between px-3 py-1">
                    <p className="capitalize text-md">{task}</p>
                    <button className="hover:bg-stone-400 rounded-md px-1 py-0.5" onClick={() => cancelTaskHandler(index)}>
                        Clear task
                    </button>
                </div>
            })}
        </div>}
    </div>
}