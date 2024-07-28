import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../reducers/todoReducer';
import { setFilter } from '../reducers/filterReducer';
 
const TodoList = ({ todos, addTodo, toggleTodo, removeTodo, filter, setFilter }) => {
    const [inputValue, setInputValue] = useState('');
 
    const filteredTodos = todos.filter(todo => {
        if (filter === 'COMPLETED') return todo.completed;
        if (filter === 'ACTIVE') return !todo.completed;
        return true; // 'ALL'
    });
 
    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };
    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <div>
                <button onClick={() => setFilter('ALL')}>All</button>
                <button onClick={() => setFilter('COMPLETED')}>Completed</button>
                <button onClick={() => setFilter('ACTIVE')}>Active</button>
            </div>
            <ul>
                {filteredTodos.map(todo => (<li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
<button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
 
// Map state to props
const mapStateToProps = (state) => ({
    todos: state.todos.todos,
    filter: state.filter.filter,
});
 
// Map dispatch to props
const mapDispatchToProps = {
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
};
 
// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);