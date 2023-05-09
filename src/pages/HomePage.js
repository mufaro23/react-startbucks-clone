import React from "react";
import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import {Fade} from "react-awesome-reveal";
import {Footer} from "../components/Footer";

function HomePage() {
    return (
        <div>
            <Header />
            <HomeScreen />
            <Fade>
                <Footer />
            </Fade>
        </div>
    )
}

export default HomePage