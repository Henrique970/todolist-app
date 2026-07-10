import { useContext, type FormEvent } from 'react';
import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';

interface TodoFormProps {
    addTodo: (event: FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <form action="" className=" relative mb-10" onSubmit={addTodo}>
            {/* o span vai ser a bolinha do todo */}
            <span className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 trasform -translate-y-1/2 rounded-full left-6`}></span>
            <input type="text" name="todo" placeholder="Create a new todo" className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg`} />
        </form>
    )
}

export default TodoForm;
