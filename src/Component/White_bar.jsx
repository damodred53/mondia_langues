import React from "react";
import image3 from "../assets/3_mini.webp";
import image5 from "../assets/5_1.webp";


const WhiteBar = ({isFirstInstance}) => {


    return (
        <div className="whitebar">
          <div className="bigsquare">
            {isFirstInstance ? (
                <div className="div_formation" id="nos_actualités">
                    <h2 className="div_formation_title">Cours individuels et collectifs</h2>
                    <p className="div_formation_paragraph">
                        Mondia-Langues propose aussi bien des formations individuelles que collectives. Pour s'inscrire 
                        à nos cours de langues, vous pouvez nous contacter directement, par mail ou bien par téléphone.
                    </p>
                </div>
            )
             : (
                <div className="div_formation">
                <h2 className="div_formation_title">Financement CPF</h2>
                <p className="div_formation_paragraph">
                    L'ensemble de nos formations sont désormais financable via votre compte 
                    compte personnel de formation (CPF).

                    Pour savoir si votre compte CPF, cliquez ici : <a href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/">Lien vers le site officiel</a>.

                </p>
            </div> 
             )

            }
          
          </div>
            <div className="square">
                {isFirstInstance ? 
                (<img src={image3} alt=""></img>)
                :
                (<img src={image5} alt=""></img>)}
            </div>
        </div>
    )
}

export default WhiteBar;