import React from "react";
import Header from "../components/Header";
import FeaturedScreen from "../components/FeaturedScreen";
import {Fade} from "react-awesome-reveal";
import {Footer} from "../components/Footer";

function FeaturedPage() {
    return (
        <div>
            <Header />
            <FeaturedScreen />
            <Fade>
                <Footer />
            </Fade>
        </div>
    )
}

export default FeaturedPage