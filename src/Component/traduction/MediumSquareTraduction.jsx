import React from "react";
import image10 from '../../assets/10.webp';
import image7 from '../../assets/7.webp';


const MediumSquareTraduction = ({instance}) => {
let textContent = ""
    switch (instance) {

        case 1: textContent = <img src={image10} alt="une femme parlant plusieurs langues" />;
        break;
        case 2: textContent =  <img src={image7} alt="bonjour en beaucoup de langues différentes"/>;
        
        break;
        case 3: textContent = 
        <div className="div_formation">
            <h2 className="div_formation_title">
                Interprétation consécutive
            </h2>
            <p className="div_formation_paragraph">
                Pour vos négociations, réunions restreintes, visites, formations... L'orateur s'exprime et s'interrompt à intervalles réguliers pour que l'interprète prenne la parole à son tour et reformule ce qui vient d'être dit
            </p>
        </div>;
        break;
        default: textContent= "texte par défault";

    }


    return (

            <div className="mediumsquare">
                {textContent}
            </div>

    )
}

export default MediumSquareTraduction;