import React from "react";
import Header from "../header";
import Footer from "../footer";
import mondiaLangues from "../../assets/Bat_1.webp";
import Carousel2 from "../Qui-sommes-nous/Carousel_qui_sommes_nous";

const QuiSommesNous = () => {

    return (
        <>
        <Header />
        <h2>De la création de Mondia-Langues à aujourd'hui</h2>
        <div className="div_story_mondialangues">
            <img src={mondiaLangues} className="pic_mondialangues" alt="école de langue mondia-langues"></img>
            <div className="div_story_mondialangues_paragraph">
                <p>
                    Installé à Laval depuis 1990,  Mondia-Langues est un institut de formation reconnu pour 
                    la qualité et les compétences de ses collaborateurs ainsi que pour l'efficacité de sa pédagogie.
                </p>
            </div>
        </div>
        <div className="div_carousel">
            <Carousel2 />
        </div>
        <Footer />
        </>
    )
}
export default QuiSommesNous;