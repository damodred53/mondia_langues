import React from "react";
import image6 from '../../assets/6.webp';
import image10 from '../../assets/image10.webp';


const MediumSquareTraduction = ({instance}) => {
let textContent = ""
    switch (instance) {

        case 1: textContent = 
        <div className="div_formation">
            <h2 className="div_formation_title">Financement de votre formation</h2>
            <ol className="div_formation_paragraph list">
                <li>Compte Personnel de Formation (CPF)</li>
                <li>Plan de développement des compétences (salarié)</li>
                <li>Pour toute question à ce sujet, n'hésitez pas à nous contacter</li>
            </ol>
        </div>
        break;
        case 2: textContent = 
        <div className="div_formation">
            <h2 className="div_formation_title">Pour les particuliers</h2>
            <p className="div_formation_paragraph strong">Communiquer – Comprendre – Etre Compris .</p>
            <p className="div_formation_paragraph">Présentation simple et claire de la langue. Un apprentissage ludique et convivial basé sur l'expression et la compréhension orale. Mises en situations réelles et vécues.
            Les outils et les moyens pour un travail personnel de renforcement à domicile.</p>
        </div>
        break;
        case 3: textContent = 



        <div className="div_formation">
            <h2 className="div_formation_title">
                Cours individuels
            </h2>
            <ol className="div_formation_paragraph list">
            <li>Nous proposons des cours adaptés à vos besoins spécifiques</li>
            <li>Un planning très souple en fonction de vos contraintes</li>
            <li>Un professeur expérimenté (principalement originaire du pays) </li>
            </ol>   
        </div>



        break;
        case 4 : textContent = <img src={image6} alt="clavier"></img>
        break;
        case 5: textContent = 
            <img src={image10} alt="drapeaux brittanique et français"></img>
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