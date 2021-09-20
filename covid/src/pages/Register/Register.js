// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { register } from "../../Redux/actions/user";

// import "./Register.css";

// const Register = ({ history }) => {
//     const [user, setUser] = useState({ Username: "", email: "", password: "" });

//     const dispatch = useDispatch();

//     const handleRegister = (e) => {
//         e.preventDefault();
//         dispatch(register(user, history));
//     };

//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     return (
//         <div>
//             <>
//                 <div className="bold-line" />
//                 <div className="container">
//                     <div className="window">
//                         <div className="overlay" />
//                         <div className="content">
//                             <div className="welcome">Hello There!</div>
//                             <div className="subtitle">
//                                 We're almost done. Before using our services you
//                                 need to create an account.
//                             </div>
//                             <div className="input-fields">
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     name="Username"
//                                     className="input-line full-width"
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email"
//                                     className="input-line full-width"
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                     className="input-line full-width"
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="spacing">
//                                 or continue with{" "}
//                                 <span className="highlight">Facebook</span>
//                             </div>
//                             <div>
//                                 <button
//                                     className="ghost-round full-width"
//                                     onClick={handleRegister}
//                                 ></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { Link } from "react-router-dom";
import { register } from "../../Redux/actions/user";
// import userReducer from "../../Redux/reducer/user";
// import loading from "../../Components"

const Register = ({ history }) => {
    // const load = useSelector((state) => state.userReducer.user.load);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user, history));
    };

    return (
        <div>
            <div className="registration-form">
                <form onSubmit={handleRegister}>
                    <div className="form-icon">
                        <span>
                            <i className="icon icon-user" />
                        </span>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="username"
                            placeholder="Username"
                            name="name"
                            onChange={handleChange}
                        />
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
                            onClick={handleRegister}
                        >
                            Create Account
                        </button>
                        <Link
                            to="./login"
                            className="btn btn-outline-grey btn-sm btn-block"
                        >
                            Already have an account?
                        </Link>
                    </div>
                </form>
                <div className="social-media">
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
                </div>
            </div>
        </div>
    );
};

export default Register;
