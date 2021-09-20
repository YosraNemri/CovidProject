import React from "react";
import { Table, Button } from "react-bootstrap";
import { getUser, removeUser } from "../../Redux/actions/user";
import { useDispatch } from "react-redux";

import "./UserCard.css";
import ModalEdit from "../Modal/Modal";
function UserCard({ user }) {
    const dispatch = useDispatch();

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <br></br>
            <br></br>
            <h3>User Info</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button
                                onClick={() => {
                                    dispatch(
                                        removeUser(user._id),
                                        refreshPage()
                                    );
                                }}
                            >
                                <span id="del_user_but"> Remove user</span>
                            </Button>
                        </td>
                        <td>{user && user.name}</td>
                        <td>{user && user.email}</td>
                        <td>
                            {" "}
                            <ModalEdit user={user} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default UserCard;
