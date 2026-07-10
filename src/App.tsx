import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"
import { useState, type FormEvent } from "react"

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {

  const [todolist, setTodolist] = useState<Todo[]>([])

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const todoItem = formData.get("todo") as string

    if (!todoItem.trim()) return

    // Com isso podemos colocar dentro de um array todos os valores, e ainda colocar mais outro valor.
    setTodolist(prev => [...prev, {
      id: Date.now(),
      text: todoItem,
      completed: false
    }])

    event.currentTarget.reset()
  }

  return (
    <>
      <TodoContainer>
        <TodoHeader></TodoHeader>
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList todoList={todolist}></TodoList>
      </TodoContainer>
    </>
  )
}

export default App
