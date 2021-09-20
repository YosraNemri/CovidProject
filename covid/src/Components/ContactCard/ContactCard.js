import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteContact,
    getContact,
    toggleTrue,
} from "../../Redux/actions/ContactActions";
import "./ContactCard.css";
import editBtn from "../../Assets/edit.png";
import avatar from "../../Assets/avatar.png";
import deleteBtn from "../../Assets/delete.png";

const ContactCard = ({ contact }) => {
    const dispatch = useDispatch();

    const isAdmin = useSelector((state) => state.userReducer.isAdmin);
    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>{contact.name}</h3>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            {isAdmin ? (
                <div className="delete-edit-btns">
                    <img
                        src={deleteBtn}
                        alt="delete-icon"
                        onClick={() => dispatch(deleteContact(contact._id))}
                    />

                    <Link to="/editContact">
                        <img
                            src={editBtn}
                            alt="edit-icon"
                            onClick={() => {
                                dispatch(toggleTrue());
                                dispatch(getContact(contact._id));
                            }}
                        />
                    </Link>
                </div>
            ) : null}
        </div>
    );
};

export default ContactCard;
