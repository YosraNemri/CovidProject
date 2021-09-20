import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    deleteContact,
    getContact,
    toggleTrue,
} from "../../Redux/actions/ContactActions";
import "./ContactCardAdmin.css";
import editBtn from "../../Assets/edit.png";
import avatar from "../../Assets/avatar.png";
import deleteBtn from "../../Assets/delete.png";

const ContactCardAdmin = ({ contact }) => {
    const dispatch = useDispatch();
    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>{contact.name}</h3>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <div className="delete-edit-btns">
                <img
                    src={deleteBtn}
                    alt="delete-icon"
                    onClick={() => dispatch(deleteContact(contact._id))}
                />

                <img
                    src={editBtn}
                    alt="edit-icon"
                    onClick={() => {
                        dispatch(toggleTrue());
                        dispatch(getContact(contact._id));
                    }}
                />
            </div>
        </div>
    );
};

export default ContactCardAdmin;
