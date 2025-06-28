export default function Input({ title, isTextArea, isError, onInputChange, ...props }) {
    let classes = "w-full p-1 border-b-2 rounded border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 dark:text-stone-300 dark:bg-stone-400 dark:focus:border-white dark:text-black";
    let inputClasses = "text-sm font-bold capitalize text-stone-500 dark:text-stone-300";
    if (isError) {
        classes += " border-red-400 bg-red-200 transition duration-200";
        inputClasses += " text-red-400 transition duration-200";
    }

    return <p className="flex flex-col gap-1 my-4" >
        <label className={inputClasses} >{title}</label>
        {isTextArea ?
            <textarea className={classes} onInput={() => onInputChange(title)} {...props} ></textarea> :
            <input className={classes} onInput={() => onInputChange(title)} {...props} />
        }
    </p>
}