import React from "react";
import Facebook from "../../assets/logo_facebook.webp";
import Instagram from '../../assets/logo instagram.png';
import Twitter from '../../assets/logo_twitter.avif';
import Linkedin from '../../assets/logo_linkedin.png';




const BigSquareEntreprise = () => {

    return (

        <div className="bigsquare" >
            <div className="div_formation" id="social_network">
                <h2 className="div_formation_title" >Retrouvez-nous sur les réseaux sociaux</h2>
                <ol className="list_link div_formation_paragraph">
                    <li>
                        <a href="#" title="Notre compte est en construction sur ce réseau social" ><img src={Facebook} className="list_link_network" alt="logo de Facebook"></img></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mondia_langues/"><img src={Instagram} className="list_link_network" alt="logo d'Instagram"></img></a>
                    </li>
                    <li>
                        <a href="#" title="Notre compte est en construction sur ce réseau social"><img src={Twitter} className="list_link_network " alt="logo de Twitter"></img></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mondia-langues-a420721aa/?originalSubdomain=fr"><img src={Linkedin} className="list_link_network " alt="logo de Linkedin"></img></a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default BigSquareEntreprise;