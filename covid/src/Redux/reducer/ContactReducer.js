import {
    GET_ALL_CONTACTS,
    GET_CONTACT,
    TOGGLE_FALSE,
    TOGGLE_TRUE,
} from "../constants/ActionsTypes";

const initState = {
    contacts: [],
    isEdit: false,
    user: {},
};

function contactReducer(state = initState, { type, payload }) {
    switch (type) {
        case GET_ALL_CONTACTS:
            return { ...state, contacts: payload };
        case TOGGLE_TRUE:
            return { ...state, isEdit: true };
        case TOGGLE_FALSE:
            return { ...state, isEdit: false };
        case GET_CONTACT:
            return { ...state, user: payload };
        default:
            return state;
    }
}

export default contactReducer;
