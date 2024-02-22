import React from "react";
import Qualiopi from "../assets/logo_qualiopi.webp"


const WhiteBarQualiopi = () => {


    return (
        <div className="whitebar">
            <div className="bigsquare">
                <div className="div_formation">
                    <h2 className="div_formation_title">Nous sommes certifiés Qualiopi</h2>
                    <p className="div_formation_paragraph">
                        Le certificat Qualiopi a pour but de garantir une qualité renforcée des offres 
                        de formation en France. Les organismes de formation professionnelle, 
                        d’apprentissage et de développement des compétences sont concernés. 
                    </p>
                </div> 
            </div>
                <div className="square">
                    <img src={Qualiopi} alt="logo du certifcat qualiopi"></img>
                </div>
        </div>
    )
}

export default WhiteBarQualiopi;