import React from "react";
import {Navigate} from "react-router-dom";
import Header from "../components/Header";
import MenuScreen from "../components/MenuScreen";

function MenuPage({ user }) {
    return (
        <div>
            {!user ? (
                <Navigate to="/account/signin" />
            ) : (
                <>
                    <Header menuPage />
                    <MenuScreen />
                </>
            )}
        </div>
    )
}

export default MenuPage