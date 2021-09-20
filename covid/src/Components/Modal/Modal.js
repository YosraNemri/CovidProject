import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/actions/user";

const ModalEdit = ({ user }) => {
    // const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update(user._id, { name, email }));
        handleClose();
    };

    return (
        <div>
            <Button variant="light" onClick={handleShow}>
                Edit Profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="name"
                        type="text"
                        placeholder="new name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="email"
                        value={email}
                        type="text"
                        placeholder="new email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalEdit;
