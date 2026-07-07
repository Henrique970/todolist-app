import { useContext } from "react"
import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import { themeConfig } from "./contexts/theme"
import { ThemeContext } from "./contexts/ThemeContext"

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
        <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center`}>
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
