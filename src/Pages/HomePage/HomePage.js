import React, { Component } from "react";

import Navbar from "../../Compoment/NavBar/NavBar";
import Banner from "../../Compoment/Banner/Banner"
import About from "../../Compoment/About/About";
import { AboutInfo } from "../../Compoment/About/infoAbout"
import CardComponent from "../../Compoment/Cards/CardComponent";
import TestTimonialCardComponent from "../../Compoment/TestTimonials/TestTimonialCard";
import Footers from "../../Compoment/Footer/Footers";
class HomePage extends Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <>
                <Navbar toggle={this.toggle} show={"true"} />
                <Banner />
                <About {...AboutInfo} />
                <CardComponent />
                <TestTimonialCardComponent />
                <div>
                    <Footers />
                </div>
            </>
        );
    }
}
export default HomePage;