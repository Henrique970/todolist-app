import { useState, type FormEvent } from "react";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const useTodo = () => {
    const [todolist, setTodoList] = useState<Todo[]>([])

    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const todoItem = formData.get("todo") as string

        // Se o usuário não digitar nada, não adiciona na lista.
        if (!todoItem.trim()) return

        // Com isso podemos colocar dentro de um array todos os valores, e ainda colocar mais outro valor.
        setTodoList(prev => [...prev, {
            id: Date.now(),
            text: todoItem,
            completed: false
        }])

        event.currentTarget.reset()
        setFilter("all")
    }

    const toggleTodoCompleted = (id: number) => {
        console.log("toggleTodoCompleted", id)
        const newtodoList = todolist.map(todo => {
            if (todo.id === id) {
                const completed = !todo.completed;

                return {
                    ...todo,
                    completed,
                }
            }

            return todo;
        });
        setTodoList(newtodoList)
    };

    const filteredTodos = todolist.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        // Ele precisa do return true pois ele vai pular os outros dois ifs, e se não tiver ele não vai retornar nada. Aqui retorna o All.
        return true;
    })

    const clearCompleted = () => {
        setTodoList(prev => prev.filter(todo => !todo.completed))
    }

    const deleteTodo = (id: number) => {
        setTodoList(prev => prev.filter(todo => todo.id !== id))
    }

    return {
        addTodo,
        toggleTodoCompleted,
        filteredTodos,
        clearCompleted,
        setFilter,
        filter,
        deleteTodo
    };
};