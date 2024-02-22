import React from "react";
import image3 from '../../assets/3_mini.webp';



const ReverseMediumSquareTraduction = ({instance}) => {

let textContent = "";

switch (instance) {
    case 1: textContent = <img src={image3} alt="photographie de présentation"></img>
    break;

    case 2 : textContent = 
    <div className="div_formation">
        <h2 className="div_formation_title">Pour les entreprises</h2>
        <p className="div_formation_paragraph">Fort de 30 ans de collaboration avec les entreprises, nous pouvons convenir d'un cadre de formation sur mesure avec les entreprises<br/>
Il est notamment possible de planifier les formations directement dans les entreprises</p>
    </div>
    break;

    case 3 :textContent = 
    <div className="div_formation">
            <h2 className="div_formation_title">
                Cours collectifs
            </h2>
            <p className="div_formation_paragraph">
            Chaque session d'une durée de 40 heures se déroule durant 27 semaines à raison de 1h30 hebdomadaire, hors vacances scolaires.
            Plusieurs groupes de niveaux identiques sont programmés à des jours et/ou horaires différents.
            Tarif : 8 € de l'heure.
            </p>
    </div>
    break;

    case 4: textContent = 
    <div className="div_formation">
        <h2 className="div_formation_title">Nos langues de travail</h2>
        <p className="div_formation_paragraph">Voici nos langues de travail : Anglais, Allemand, Français, FLE, Russe, Italien, Portugais, Espagnol  </p>
    </div>
    break;

    case 5: textContent = 
        <div className="div_formation">
            <h2 className="div_formation_title">
                Examens TOEIC et TCF
            </h2>
            <p className="div_formation_paragraph list">
                Pour vous inscrire à nos formations permettant de se préparer au test TOEIC (anglais)
                ou bien au test TCF (français FLE), vous pouvez vous connecter sur le site du CPF via les liens suivants   
                
                    <a className="div_formation_link" href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/48039900500028_toeicetudiant7h/48039900500028_toeicetudiant7h">TOEIC</a> 
                    <a className="div_formation_link" href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/48039900500028_TCF-RNI/48039900500028_TCF-RNI">TCF</a>
                 
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