import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../Components/ContactList/ContactList";
import { getContacts } from "../../Redux/actions/ContactActions";
import ModalEdit from "../../Components/Modal/Modal";
import Search from "../../Components/SearchBox/SearchBox";
import Form1 from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";
import AddComment from "../../Components/CommentsCard/AddComment";
import { Link } from "react-router-dom";
import CommentsList from "../../Components/CommentsCard/CommentList";

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    const user = useSelector((state) => state.userReducer.user);
    const [searchItem, setSearchItem] = useState("");
    const [CalRisk, setCalRisk] = useState({});
    const [answer1, setAnswer1] = useState({});
    const [answer2, setAnswer2] = useState({});
    const [answer3, setAnswer3] = useState({});
    const [answer4, setAnswer4] = useState({});

    return (
        <div className="row py-5 px-4">
            <div className="col-md-5 mx-auto">
                {/* Profile widget */}
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img
                                    src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/102829208_10222746549835556_8920147349280536489_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=C6CCuOtMKe8AX8ofvAf&_nc_ht=scontent.ftun1-2.fna&oh=212eb5aeb5c056bf15eaefa40a536a74&oe=60E335A4"
                                    alt="..."
                                    width={130}
                                    className="rounded mb-2 img-thumbnail"
                                />

                                {/* <a
                                    href="#"
                                    className="btn btn-outline-dark btn-sm btn-block"
                                >
                                    Edit profile
                                </a> */}
                            </div>
                            <div>
                                {" "}
                                <ModalEdit user />
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">
                                    {user && user.name}
                                </h4>
                                <p className="small mb-4">
                                    {" "}
                                    {/* <i className="fas fa-map-marker-alt mr-2" /> */}
                                    {user && user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-3">
                        <h5 className="mb-0" style={{ color: "black" }}>
                            List that may assist you
                        </h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <main className="py-3">
                                <Search setSearchItem={setSearchItem} />
                                <div>
                                    <ContactList searchItem={searchItem} />
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0" style={{ color: "black" }}>
                                Want to calculate your risk of infectiousness ?
                            </h5>
                            {/* <a href="#" className="btn btn-link text-muted">
                                Click Here
                            </a> */}
                        </div>
                        <div>
                            <Form1
                                setAnswer1={setAnswer1}
                                setAnswer2={setAnswer2}
                                setAnswer3={setAnswer3}
                                setAnswer4={setAnswer4}
                            />
                            <div>
                                {answer1 === "Yes" &&
                                answer2 === "Yes" &&
                                answer3 === "No" &&
                                answer4 === "No"
                                    ? () => setCalRisk("You are not at risk")
                                    : () => setCalRisk("You are at risk")}

                                {answer1 === "No" &&
                                answer2 === "No" &&
                                answer3 === "Yes" &&
                                answer4 === "Yes"
                                    ? () => setCalRisk("You are at risk")
                                    : () => setCalRisk("You are not at risk")}

                                {answer1 === "Yes" &&
                                answer2 === "No" &&
                                answer3 === "Yes" &&
                                answer4 === "No"
                                    ? () => setCalRisk("You are at risk")
                                    : () => setCalRisk("You are not at risk")}
                                {answer1 === "Yes" &&
                                answer2 === "Yes" &&
                                answer3 === "No" &&
                                answer4 === "No"
                                    ? () => setCalRisk("You are not at risk")
                                    : () => setCalRisk("You are at risk")}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: "black" }}>
                            Want to consult a cool AI model developed by
                            tunisian scientists for covid prediction?{" "}
                            <h5 style={{ color: "black" }}>
                                <a href="https://www.anna.tn/covid19Positivity">
                                    Click here!
                                </a>
                            </h5>
                        </h5>
                    </div>
                    <div>
                        <AddComment />
                        <CommentsList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
