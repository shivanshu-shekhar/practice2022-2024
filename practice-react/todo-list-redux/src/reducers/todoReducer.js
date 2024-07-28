const initialState = {
    todos: [],
};
 
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
 
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload, completed: false },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        
        
        case REMOVE_TODO:
            return {
                ...state,
todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};
 
export default todoReducer;