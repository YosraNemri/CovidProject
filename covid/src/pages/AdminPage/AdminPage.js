import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalEdit from "../../Components/Modal/Modal";
import UserCard from "../../Components/UserCard/UserCard";
import "./AdminPage.css";

import { AllUsers, update } from "../../Redux/actions/user";

function AdminPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AllUsers());
    }, []);
    const users = useSelector((state) => state.userReducer.users);
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);
    return !users ? (
        <h4>loading</h4>
    ) : (
        <div>
            {users.map((user, index) => (
                <UserCard user={user} key={index} />
                // <ModalEdit user={user} key={index} />
            ))}
            {/* {users.map((user, index) => (
                <ModalEdit user={user} key={index} />
            ))} */}
        </div>
    );
}

export default AdminPage;
