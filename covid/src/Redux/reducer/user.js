const {
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOAD_USER,
    CURRENT_USER,
    LOGOUT_USER,
    GET_USERS,
    GET_USER,
    GET_COMMENT,
    DELETE_COMMENT,
    ADD_COMMENT,
    // UPDATE_USER,
} = require("../constants/user");

const initialState = {
    user: {},
    errors: [],
    isAuth: false,
    load: false,
    users: [],
    comments: [],
    comment: {},
    // update: false,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        //   payload:{token , msg , user }
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        //   payload: {token , msg , user}
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case FAIL_USER:
            return { ...state, errors: payload, load: false };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        case GET_USER:
            return {
                ...state,
                load: false,
                user: payload,
            };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };
        case GET_USERS:
            return { ...state, load: false, users: payload.users };

        case ADD_COMMENT:
            return {
                ...state,
                comments: [
                    { ...state.comments, comment: payload.comments.comment },
                ],
                load: false,
                iAuth: true,
            };
        case GET_COMMENT:
            return { ...state, load: false, post: payload };
        case DELETE_COMMENT:
            return { ...state, isAuth: false, comment: {} };
        default:
            return state;

        // case UPDATE_USER:
        //     localStorage.setItem("token", payload.token);
        //     return { ...state, user: payload.user, update: true, isAuth: true };
        // case "VIDE_ERRORS":
        //     return { ...state, errors: [] };
        // default:
        //     return state;
    }
};

export default userReducer;
