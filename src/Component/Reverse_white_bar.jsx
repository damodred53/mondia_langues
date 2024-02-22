import React from "react";
import image2 from '../assets/2_mini.webp';
import image6 from '../assets/6.webp';


const ReverseWhiteBar = ({isFirstInstance}) => {

   

    return (
        <div className="reversewhitebar">
            <div className="reversebigsquare">
                {isFirstInstance ? (
                  <div className="div_formation">
                  <h2 className="div_formation_title">Les langues enseignées</h2>
                  <p className="div_formation_paragraph">
                    Nous disposons de formateurs professionnels pour les langues suivantes : 
                    l'Anglais / le français FLE / l'allemand / le russe / l'italien / le portugais et l'espagnol.

                    Pour toute autre demande en langue, vous pouvez nous contacter directement. 
                  </p>
              </div>  
                ) : (
                <div className="div_formation">
                    <h2 className="div_formation_title">Place au e-learning !!</h2>
                    <p className="div_formation_paragraph">

                        Choisir la formation à distance engendre de nombreux avantages :

                        - grande souplesse d’organisation
                        - optimisation du temps
                        - grande flexibilité pour se former à son rythme
                        - disponibilité sans contrainte de temps et de lieu
                        - convivialité et simplicité d’utilisation
                    </p>
                </div>
                )
                }
            </div>
            <div className="reversesquare">
                {isFirstInstance ? (
                    <img src={image2} alt="" ></img>
                )
                :
                (
                    <img src={image6} alt="" ></img>
                )}
            </div>
        </div>
    )
}

export default ReverseWhiteBar;