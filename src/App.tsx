import * as React from 'react';
import TodoPorivder from './context/todoContext';
import Todos from './containers/Todos';
import AddTodo from './components/AddTodo';
import './styles.css';

export default function App() {
    return (
        <TodoPorivder>
            <main className="App">
                <h1>My Todos</h1>
                <AddTodo />
                <Todos />
            </main>
        </TodoPorivder>
    );
}
