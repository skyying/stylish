import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const dispatch = (type, action) =>
    store.dispatch(Object.assign({}, {type: type}, action));

export const appReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_API_DATA": {
            return Object.assign({}, state, {data: action.data});
        }
        case "UPDATE_CATEGORY": {
            return Object.assign({}, state, {category: action.category});
        }
        default:
            return state;
    }
};

export const store = createStore(
    appReducer,
    {
        category: null,
        data: null,
        searchValue: ""
    },
    applyMiddleware(thunk),
);
