import React from "react";


const LittleSquare = ({isFirstInstanceContact}) => {


    return(
        <div className="square squarecontact div_formation" >
           
            <h2 className="div_formation_title">Nos coordonnées</h2>

                <p className="div_formation_title_adresse">20 Quai Jehan Fouquet<br/>
                53000 Laval<br/>
                02 43 53 54 17<br/>
                info@mondia-langues.fr </p>
                <p className="div_formation_title_adresse">Nous écrire ? <a href="mailto: info@mondia-langues.fr">Cliquez ici</a></p>   
           
        </div>
    )
}

export default LittleSquare;