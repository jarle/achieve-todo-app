import { createContext, useState } from "react"

export const TodoContext = createContext(null);

export default function TodoProvider({ children }) {
    const [todos, setTodos] = useState(new Map())

    const addTodo = todo => {
        const copy = new Map(todos)
        copy.set(todo.id, todo)
        setTodos(copy)
    }

    const deleteTodo = todoID => {
        const copy = new Map(todos)
        copy.delete(todoID)
        setTodos(copy)
    }

    const toggleTodo = todoID => {
        const copyList = new Map(todos)
        const copyTodo = copyList.get(todoID)
        copyTodo.isChecked = !!!copyTodo.isChecked
        copyList.set(todoID, copyTodo)
        setTodos(copyList)
    }

    return (
        <TodoContext.Provider value={{
            todos: [...todos.values()],
            addTodo,
            deleteTodo,
            toggleTodo
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}