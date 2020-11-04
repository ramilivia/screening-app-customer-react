import { SHOW_MODAL } from './screen.types';

const INITIAL_VALUE = {
    show: false
};

const screen = (state = INITIAL_VALUE, action) => {
        switch(action.type) {
            case SHOW_MODAL:
                return {
                    ...state,
                    modalShow: true
                }
            default:
                return state;
        }
}

export default screen;