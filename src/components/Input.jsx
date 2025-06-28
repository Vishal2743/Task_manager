export default function Input({title, isTextArea, ...props}) {
const classes = "w-full p-1 border-b-2 rounded border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 dark:text-stone-300 dark:bg-stone-400 dark:focus:border-white dark:text-black";

    return <p className="flex flex-col gap-1 my-4" >
        <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300" >{title}</label>
        {isTextArea ? <textarea className= {classes}
        {...props}></textarea> : <input className={classes} {...props}/>}
    </p>
}