import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import "./ContactList.css";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ searchItem }) => {
    const contacts = useSelector((state) => state.ContactReducer.contacts);

    return !contacts ? (
        <h1>loading</h1>
    ) : (
        <div className="contacts-content">
            <div className="contacts-list">
                {contacts &&
                    contacts
                        .filter((val) =>
                            val.name
                                .toLowerCase()
                                .includes(searchItem.toLowerCase())
                        )
                        .map((contact) => (
                            <Col key={contact._id} sm={12} md={6} lg={4} xl={3}>
                                <ContactCard
                                    contact={contact}
                                    key={contact._id}
                                />
                            </Col>
                        ))}
            </div>
        </div>
    );
};

export default ContactList;
