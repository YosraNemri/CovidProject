import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    UPDATE_USER,
    GET_USER,
    GET_USERS,
    GET_COMMENT,
    DELETE_COMMENT,
    ADD_COMMENT,
} from "../constants/user";

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);
        //succees action
        dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
        history.push("/profile");
    } catch (error) {
        // fail
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
        history.push("./profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};
export const getUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        await axios.get(`/api/user/${id}`);
        // dispatch(getUser(id));
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_USER, payload: error.response });
    }
};
export const update = (id, user) => async (dispatch) => {
    dispatch({ type: UPDATE_USER });
    try {
        let result = await axios.put(`/api/user/${id}`, user);
        dispatch(AllUsers());
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.data });
    }
};

// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
export const removeUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.delete(`/api/user/${id}`);
        dispatch({ type: GET_USER, payload: result.data.user });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};
export const AllUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.get("/api/user/users");
        dispatch({ type: GET_USERS, payload: result.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_USER, payload: error.response });
    }
};
//addComment
export const addComment = (id, history) => async (dispatch) => {
    console.log("id", id);
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: { authorization: localStorage.getItem("token") },
        };
        await axios.post(`/api/user/comment/${id}`, config);
        dispatch({ type: ADD_COMMENT });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_USER, payload: error.data });
    }
};
//get comment
export const getComment = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let res = await axios.get(`/api/user/${id}`);
        dispatch({
            type: GET_COMMENT,
            payload: res.data.post.comments.comment,
        });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.data });
    }
};

//delete comment
export const deleteComment = (commentId) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        function refreshPage() {
            window.location.reload();
        }
        let res = await axios.delete(`/api/user/comments/${commentId}`);
        dispatch({
            type: DELETE_COMMENT,
            payload: res.data,
        });
        refreshPage();
    } catch (error) {
        console.log(error);
    }
};
