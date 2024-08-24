import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id: 1,
        todo: 'This is a todo item',
        completed: false
    },],
    addTodo: (todo) => {},
    toggleComplete: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 