import React from "react";
import Header from "../header";
import Footer from "../footer";
import DarkBarTraduction from "../traduction/DarkBarTraduction";
import WhiteBarTraduction from "../traduction/WhiteBarTraduction";
import WhiteBarTraduction2 from "../traduction/WhiteBarTraduction2";
import WhiteBarTraduction3 from "../traduction/WhiteBarTraduction3";

const TraductionInterpretation = () => {

    return (
        <>
        <Header/>
        <p className="paragraph_traduction"> 
            Quelle que soit la nature de vos besoins et la langue, nos traducteurs et interprètes 
            sauront y répondre avec compétence dans les délais les plus courts. 
            Devis rapide sur simple demande.
        </p>
        <DarkBarTraduction />
        <WhiteBarTraduction />
        <DarkBarTraduction />
        <WhiteBarTraduction2 />
        <DarkBarTraduction />
        <WhiteBarTraduction3 />

        <Footer />
        </>
    )
}

export default TraductionInterpretation;