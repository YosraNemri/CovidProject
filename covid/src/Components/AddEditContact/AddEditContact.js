import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import "./AddEditContact.css";
import { addContact, editContact } from "../../Redux/actions/ContactActions";
import addBtn from "../../Assets/add.png";
import editBtn from "../../Assets/edit.png";

const AddEditContact = ({ history }) => {
    const dispatch = useDispatch();
    const edit = useSelector((state) => state.ContactReducer.isEdit);
    const editUser = useSelector((state) => state.ContactReducer.user);
    // state
    const [user, setUser] = useState({ name: " ", email: " ", phone: 0 });

    // handleChange
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        edit ? setUser(editUser) : setUser({ name: " ", email: " ", phone: 0 });
    }, [edit, editUser]);
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addContact(user));
        // history.push("/");
    };
    return (
        <Form className="my-form">
            {/* input name */}
            <Form.Group className="my-little-form">
                <Form.Control
                    type="text"
                    placeholder="Enter contact name ..."
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    // onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <Form.Text className="text-muted">
                    Name is required !!
                </Form.Text>
            </Form.Group>

            {/* input email */}
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter contact email ..."
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Email is required</Form.Text>
            </Form.Group>

            {/* input phone */}
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Enter contact phone ..."
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* <img
                    src={editBtn}
                    alt="add"
                    className="edit-btn"
                    onClick={() => {
                        dispatch(editContact(editUser._id, user));
                        history.push("/AdminPage");
                    }}
                />
            */}
            <img
                src={addBtn}
                alt="add"
                className="add-btn"
                onClick={handleAdd}
            />
        </Form>
    );
};

export default AddEditContact;
