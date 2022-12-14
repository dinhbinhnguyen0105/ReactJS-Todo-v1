// context/todoContext.tsx

import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoPorivder: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            title: 'post 1',
            description: 'This is a description',
            status: false,
        },
        {
            id: 2,
            title: 'post 2',
            description: 'This is a description',
            status: true,
        },
    ]);
    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: todo.title,
            description: todo.description,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };
    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                (todo.status = true), setTodos([...todos]);
            }
        });
    };
    return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
};

export default TodoPorivder;
