import React from "react";
import AddEditContact from "../../Components/AddEditContact/AddEditContact";
import ContactListAdmin from "../../Components/ContactListAdmin/ContactListAdmin";
import { useSelector } from "react-redux";

const ManageContact = ({ history }) => {
    const contacts = useSelector((state) => state.ContactReducer.contacts);

    return (
        <div>
            {" "}
            <AddEditContact history={history} />
            <ContactListAdmin history={history} />
        </div>
    );
};

export default ManageContact;
