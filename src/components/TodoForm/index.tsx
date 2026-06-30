const TodoForm = () => {
    return (
        <form action="" className=" relative mb-10">
              {/* o span vai ser a bolinha do todo */}
              <span className="absolute w-6 h-6 border border-neutral-very-dark-grayish-blue top-1/2 trasform -translate-y-1/2 rounded-full left-6"></span>
            <input type="text" name="todo" placeholder="Create a new todo" className="bg-neutral-very-dark-desaturated-blue w-full text-white rounded-md py-6 pl-16 outline-none text-lg" />
            </form>
    )
}

export default TodoForm;