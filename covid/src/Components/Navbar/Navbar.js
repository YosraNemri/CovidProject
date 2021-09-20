import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);
    return (
        <header>
            <h2 className="black">
                <Link to="/">Covid Assistance Website</Link>
            </h2>
            {isAdmin ? <h2>admin Dashboard</h2> : null}
            <nav>
                <ul>
                    <ul className="ul_auth">
                        {isAuth ? (
                            <ul>
                                <Link to="/">
                                    {" "}
                                    <li
                                        className="auth"
                                        onClick={() => dispatch(logout())}
                                    >
                                        LOGOUT{" "}
                                    </li>
                                </Link>
                                <ul>
                                    {" "}
                                    <Link to="/admin">
                                        {" "}
                                        <li className="auth">Users </li>
                                    </Link>
                                    <Link to="/Manage">
                                        {" "}
                                        <li className="auth">Contacts</li>
                                    </Link>
                                </ul>
                            </ul>
                        ) : (
                            <ul>
                                {" "}
                                <Link to="/register">
                                    {" "}
                                    <li className="auth">Register </li>
                                </Link>
                                <Link to="/login">
                                    {" "}
                                    <li className="auth">Login </li>
                                </Link>
                            </ul>
                        )}
                    </ul>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
