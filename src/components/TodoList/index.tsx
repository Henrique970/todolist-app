import { useContext } from 'react';
import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import type { Todo } from '../../hooks/useTodo';
import IconCheck from '../../../public/images/icon-check.svg'

interface TodoListProps {
    todoList: Todo[]
    toggleTodoCompleted: (id: number) => void;
    setFilter: (filter: "all" | "active" | "completed") => void;
    filter: "all" | "active" | "completed";
    clearCompleted: () => void;
}

const TodoList = ({ todoList, toggleTodoCompleted, setFilter, filter, clearCompleted }: TodoListProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={` ${themeConfig[theme].todo.backgroundColor} rounded-md`}>
                <ul>
                    {
                        todoList.map((todo) => (
                            <li key={todo.id} className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}>

                                <div className="flex items-center gap-4">
                                    <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(210,100%,67%),hsl(280,87%,65%))] hover:p-px">

                                        <button className={`
                                            w-full h-full rounded-full cursor-pointer border 
                                            ${themeConfig[theme].todo.borderColor} 
                                            ${themeConfig[theme].todo.backgroundColor} 
                                            ${todo.completed ? "bg-[linear-gradient(to_right,hsl(210,100%,67%),hsl(280,87%,65%))]" : ""}`} onClick={() => toggleTodoCompleted(todo.id)}>

                                            {todo.completed &&
                                                <img src={IconCheck} alt="Ícone de verificação" className="w-2 h-2 m-auto" />
                                            }

                                        </button>
                                    </span>

                                    <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>{todo.text}</p>
                                </div>
                            </li>
                        ))
                    }

                </ul>

                <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
                    <p>{todoList.length} items total</p>
                    {/* O hidden esconde os elementos */}
                    <div className="hidden sm:flex gap-4 ">

                        <button className={`${filter === "all" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={() => setFilter("all")}>All</button>

                        <button className={`${filter === "active" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={() => setFilter("active")}>Active</button>

                        <button className={`${filter === "completed" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={() => setFilter("completed")}>Completed</button>
                    </div>

                    <button className={`cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={clearCompleted}>Clear Completed</button>

                </div>

            </div>

            {/* Mobile Filter Buttons */}
            <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}>

                <button className={`${filter === "all" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={() => setFilter("all")}>All</button>

                <button className={`${filter === "active" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={() => setFilter("active")}>Active</button>

                <button className={`${filter === "completed" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`} onClick={() => setFilter("completed")}>Completed</button>

            </div>
        </>
    )
}

export default TodoList;
