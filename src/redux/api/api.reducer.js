import { LIST_CLIENTS } from './api.types';

const INITIAL_STATE = {
    clients: [] 
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LIST_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        default:
            return state;
    }
}

export default reducer;