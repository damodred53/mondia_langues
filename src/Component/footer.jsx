import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {


    return (

        <footer className="footer">
            <section className="footer_column">
                <h3>Nos coordonnées</h3>
                <ul>
                    <li>20 quai Jehan Fouquet</li>
                    <li>53000 Laval</li>
                    <li>02 43 53 54 17</li>
                    <li>info@mondia-langues.fr</li>
                </ul>
            </section>

            <hr className="footer_bar"></hr>

            <section className="footer_column">
                <h3>Nos prestations</h3>
                <ul>
                    <li><Link to="/formation">Financement</Link></li>
                    <li><Link to="/formation">Nos cours de langues</Link></li>
                    <li><Link to="/contact">Séjours linguistiques</Link></li>
                    <li><Link to="/traduction">Traduction / Interprétation</Link></li>
                </ul>
            </section>

            <hr className="footer_bar"></hr>

            <section className="footer_column">
                <h3>Vie de l'entreprise</h3>
                <ul>
                    <li><a href="#" title="La newsletter est actuellement en construction">Newsletter</a></li>
                    <li><Link to="/">Nos actualités</Link></li>
                    <li><Link to="/entreprise#social_network">Réseaux sociaux</Link></li>
                    <li><Link to="/entreprise#témoignages_stagiaires">Témoignages</Link></li>
                </ul>
            </section>


        </footer>
    )
}

export default Footer;