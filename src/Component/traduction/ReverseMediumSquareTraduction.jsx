import React from "react";



const ReverseMediumSquareTraduction = ({instance}) => {

let textContent = "";

switch (instance) {
    case 1: textContent = 
    <div className="div_formation">
        <p className="div_formation_paragraph">Le soin apporté au choix de notre traducteur garantit la qualité linguistique ainsi que la pertinence technique de notre traduction.
        La langue maternelle de nos traducteurs est celle de la langue cible de votre document.
        Leurs compétences techniques sont en adéquation avec la nature du travail demandé.</p>
    </div>

    break;

    case 2 : textContent = 
    <div className="div_formation">
            <h2 className="div_formation_title">Vous avez un besoin précis ?</h2>
            <p className="div_formation_paragraph">
            Nous vous conseillons dans le choix du mode d'interprétation le mieux adapté. <br />
            Si vous le souhaitez, nous vous fournissons et nous mettons en place le matériel nécessaire.
            </p>
        </div>
    break;

    case 3 :textContent = 
    <div className="div_formation">
            <h2 className="div_formation_title">
                Interprétation simultanée
            </h2>
            <p className="div_formation_paragraph">
                Pour vos conférences, congrès, séminaires, formation en salle...
            </p>
            <p className="div_formation_paragraph">
                L'interpète restitue le message presque instantanément par microphione pendant que l'orateur s'exprime.
            </p>
    </div>
    break;

    default : textContent = "Il y a une erreur texte non disponible";

}


    return (

            <div className="reversemediumsquare">
                {textContent}
            </div>

    )
}

export default ReverseMediumSquareTraduction;