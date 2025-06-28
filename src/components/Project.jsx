import { useRef } from "react";
import Input from "./Input";

export default function Project({ contentObject, addTaskHandler }) {
    const date = new Date(contentObject.dueDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    const taskItem = useRef();

    return <div className="flex flex-col items-start justify-start w-[35rem] mt-16 dark:text-stone-300">
        <h2 className="text-3xl font-bold mb-4 capitalize">{contentObject.title}</h2>
        <p className="dark:text-gray-400 mb-6">{formatted}</p>
        <p className="dark:text-gray-400 mb-5 whitespace-pre-line">{contentObject.description}</p>
        <hr className="border-t-2 border-stone-400 w-full mb-5" />
        <h2 className="text-3xl font-bold mb-4">Tasks</h2>
        <div className="flex gap-8 items-center w-full">
            <Input ref={taskItem} ></Input>
            <button className="hover:bg-stone-200 p-2 rounded-xl"
                onClick={() => {
                    addTaskHandler(taskItem.current.value);
                    taskItem.current.value = '';
                }}>
                Add Task
            </button>
        </div>
        {contentObject.tasksList.length > 0 && <div className="flex flex-col w-full mt-5 bg-stone-300">
            {(contentObject.tasksList).map((task) => {
                return <p key={task}>{task}</p>
            })}
        </div>}
    </div>
}