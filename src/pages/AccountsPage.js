import React from "react";
import {Navigate} from "react-router-dom";
import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";

function AccountsPage({ accountType, user }) {

    if (accountType === 'login') {
        return (
            <div>
                {user ? <Navigate to="/menu" /> : <LoginScreen />}
            </div>
        )
    } else {
        return (
            <div>
                {user ? <Navigate to="/menu" /> : <SignupScreen />}
            </div>
        )
    }


}

export default AccountsPage