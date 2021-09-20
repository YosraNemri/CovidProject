import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import "./ContactListAdmin.css";
import ContactCardAdmin from "../ContactCardAdmin/ContactCardAdmin";
import { getContacts } from "../../Redux/actions/ContactActions";

const ContactListAdmin = ({ searchItem }) => {
    const contacts = useSelector((state) => state.ContactReducer.contacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    return !contacts ? (
        <h1>loading</h1>
    ) : (
        <div className="contacts-content">
            <div className="contacts-list">
                {contacts &&
                    contacts
                        // .filter((val) =>
                        //     val.name
                        //         .toLowerCase()
                        //         .includes(searchItem.toLowerCase())
                        // )
                        .map((contact) => (
                            <Col key={contact._id} sm={12} md={6} lg={4} xl={3}>
                                <ContactCardAdmin
                                    contact={contact}
                                    key={contact._id}
                                />
                            </Col>
                        ))}
            </div>
        </div>
    );
};

export default ContactListAdmin;
