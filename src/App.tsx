import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"

function App() {

  return (
    <>
      <div className='bg-neutral-very-dark-blue h-screen'>
        <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
          <div className="max-w-175 m-auto p-8">
            <TodoHeader></TodoHeader>
            <TodoForm></TodoForm>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
