import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions/user";

import "./Login.css";
const Login = ({ history }) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    // console.log(user);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };

    return (
        <div>
            <div className="registration-form">
                <form onSubmit={handleLogin}>
                    <div className="form-icon">
                        <span>
                            <i className="icon icon-user" />
                        </span>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control item"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="button"
                            className="btn btn-block create-account"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                    <Link
                        to="./Register"
                        className="btn btn-outline-dark btn-sm btn-block"
                    >
                        First time here? Create your account!
                    </Link>
                </form>
                {/* <div className="social-media">
                    <h5>Sign up with social media</h5>
                    <div className="social-icons">
                        <a href="#">
                            <i
                                className="icon-social-facebook"
                                title="Facebook"
                            />
                        </a>
                        <a href="#">
                            <i className="icon-social-google" title="Google" />
                        </a>
                        <a href="#">
                            <i
                                className="icon-social-twitter"
                                title="Twitter"
                            />
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Login;
