import React from "react";
import Logo from '../assets/logo_mondia_langues.webp';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import  qualiopi  from "../assets/logo_qualiopi.webp";



const Header = () => {

    library.add(faBars);
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991 && isOpen) {
                setIsOpen(false);
            }

        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [isOpen]);

    return (
        <>
        <div className="header">
            <img src={Logo} alt="logo de mondia-langue"></img>

            <div className="header_title_navbar">
                <h1>Mondia-Langues</h1>
                <nav className="header_navbar">
                    <ul className="header_navbar_list">

                        <li><Link to="/" ><span>Accueil</span></Link></li>
                        <li><Link to="/presentation" ><span>Qui sommes-nous ?</span></Link></li>
                        <li><Link to="/formation" ><span>Votre formation</span></Link></li>
                        <li><Link to="/traduction" ><span><small>Traduction/Interprétation</small></span></Link></li>
                        <li><Link to="/entreprise" ><span>Vie de l'entreprise</span></Link></li>
                        <li><Link to="/contact" ><span>Contact</span></Link></li>
                        
                    </ul>
                    <img className="logo_qualiopi" src={qualiopi} alt="logo du label qualiopi"></img>
                    <FontAwesomeIcon className="menu_burger_icon" onClick={toggleMenu} icon={faBars} />
                    
                </nav>

            </div>

            


        </div>
        {isOpen ? 
        <section className="menu_hidden">
            <div>
                <nav className="menu_hidden_header_navbar">
                    <ul className="menu_hidden_header_navbar_list">

                        <li><Link to="/" >Accueil</Link></li>
                        <li><Link to="/presentation" >Qui sommes-nous ?</Link></li>
                        <li><Link to="/formation" >Votre formation</Link></li>
                        <li><Link to="/traduction" ><small>Traduction/Interprétation</small></Link></li>
                        <li><Link to="/entreprise" >Vie de l'entreprise</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                            
                </nav>
            </div>
        </section>
    : ""
    }
        
    </>
    )
}

export default Header;