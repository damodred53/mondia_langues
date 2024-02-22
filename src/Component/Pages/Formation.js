import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import EmptyWhiteBar from "../Formation/EmptyWhiteBar";
import DarkBarFormation from "../Formation/Dark_bar_formation";
import WhiteBarFormation from "../Formation/WhiteBarFormation";
import WhiteBarFormation2 from "../Formation/WhiteBarFormation2";
import WhiteBarFormation3 from "../Formation/WhiteBarFormation3";
import WhiteBarFormation4 from "../Formation/WhiteBarFormation4";
import WhiteBarFormation5 from "../Formation/WhiteBarFormation5";

const Formation = () => {



    return (
        <>
        <Header />
        <EmptyWhiteBar />
        <DarkBarFormation />
        <WhiteBarFormation />
        <DarkBarFormation />
        <WhiteBarFormation5 />
        <DarkBarFormation />
        <WhiteBarFormation2 />
        <Carousel />
        <DarkBarFormation />
        <WhiteBarFormation3 />
        <DarkBarFormation />
        <WhiteBarFormation4 />
        <Footer />
        </>
    )
}

export default Formation;