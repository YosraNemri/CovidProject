import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
    return (
        <div className="landpage">
            <div className="cover">
                <h1 className="police">Welcome to Covid Assistance Website</h1>
                <h1 className="police">
                    Make your journey with Covid less disturbing
                </h1>

                <h4>
                    To learn more about the pandemic please consult{" "}
                    <Link to="/General"> the General Informations </Link>
                </h4>
            </div>
        </div>
    );
};

export default Homepage;
