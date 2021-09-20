import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Errors from "./pages/Errors/Errors";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
import GeneralInfo from "./pages/GeneralInfo/GeneralInfo";
import AdminPage from "./pages/AdminPage/AdminPage";
import React from "react";
import ManageContact from "./pages/ManageContact/ManageContact";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <PrivateRoute path="/Profile" component={Profile} />
                <Route path="/General" component={GeneralInfo} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/Manage" component={ManageContact} />
                <Route path="/*" component={Errors} />
            </Switch>
        </div>
    );
}

export default App;
