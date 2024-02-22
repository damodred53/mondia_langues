import React from "react";
import livretAccueil from "../../règlement_livret_accueil.pdf";


const ReverseBigSquareEntreprise = () => {



    return (

        <div className="reversebigsquare div_formation">
            <h2 className="div_formation_title">Livret d'accueil</h2>
            <p className="div_formation_paragraph">Vous pouvez cliquer <a download href={livretAccueil}><span>ici</span></a> pour télécharger le PDF du livret d'accueil et le règlement général de l'entreprise</p>
        </div>
    )
}

export default ReverseBigSquareEntreprise;