export default function Buttons({ children, ...props }) {
    return <button {...props}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 hover:border-stone-600 hover:-translate-y-0.5 hover:scale-105 transition-colors duration-300 dark:bg-stone-500 dark:text-stone-200">
        {children}
    </button>
}