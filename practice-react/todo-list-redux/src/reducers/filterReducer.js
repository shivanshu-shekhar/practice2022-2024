const initialState = {
    filter: 'ALL', // Possible values: ALL, COMPLETED, ACTIVE
};
 
const SET_FILTER = 'SET_FILTER';
 
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
 
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};
 
export default filterReducer