import { TOGGLE_MODAL_CLIENT } from './screen.types';

const INITIAL_VALUE = {
    showModalClient: false
};

const screen = (state = INITIAL_VALUE, action) => {
        switch(action.type) {
            case TOGGLE_MODAL_CLIENT:
                return {
                    ...state,
                    showModalClient: !state.showModalClient
                }
            default:
                return state;
        }
}

export default screen;