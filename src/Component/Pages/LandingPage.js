import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import DarkBar from "../Dark_bar";
import WhiteBar from "../White_bar";
import ReverseWhiteBar from "../Reverse_white_bar";
import WhiteBarQualiopi from "../White_bar_qualiopi";





const LandingPage = () => {

   


    return (
        <>
        <Header />
        <Carousel />
        <DarkBar />
        <WhiteBar isFirstInstance={true}/>
        <DarkBar />
        <ReverseWhiteBar isFirstInstance={true}/>
        <DarkBar />
        <WhiteBar />
        <DarkBar />
        <ReverseWhiteBar />
        <DarkBar />
        <WhiteBarQualiopi />
        <Footer />
        </>
    )
}

export default LandingPage;


