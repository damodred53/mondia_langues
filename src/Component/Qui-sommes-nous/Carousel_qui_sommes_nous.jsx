import React from "react";
import flèche_précédent from '../../assets/flèche_précédent.png';
import flèche_suivant from '../../assets/flèche_suivant.png';
import { useState } from "react";
import image1 from "../../assets/formateur_1.webp";
import image2 from "../../assets/formateur_2.webp";
import image3 from "../../assets/formateur_3.webp";
import image4 from "../../assets/formateur_4.webp";
import image5 from "../../assets/formateur_5.jpg";






const Carousel2 = () => {

    /* gestion de l'image de ce carousel */
    const arrayPictures = [
        image1,image2, image3, image4 ,image5
    ];

    const arrayBiographie = [
        "Kieran McCarthy fondateur et directeur de Mondia-Langues - Formateur d'anglais", "Alexis McDonald Assistant de direction - Formateur d'anglais", "  Pauline Gibon - Formatrice d'espagnol",
        "Florent Guyard - Formatrice de français FLE", "Andrea Trapnell - Formatrice d'anglais"
    ];

  const [index, setIndex] = useState(0);
  const [indexText, setIndexText] = useState(0);
  const length = arrayPictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setIndexText(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    setIndexText(newIndex >= length ? 0 : newIndex);
  };



  return (
    <div className="carousel">
      <div className="pictureBackground">
        <div
          className="image_background_carousel"
          key={index}
        >
            <div className="carousel_display">
                <img src={arrayPictures[index]} className="image_carousel2" alt="photographies des formateurs"></img>
                <div className="div_in_carousel_paragraph">
                    <p>{arrayBiographie[indexText]}</p>
                </div>
            </div>
            
          <div className="buttons_logement2">
            <button
              className="button_logement_black"
              style={length === 1 ? { display: 'none' } : {}}
              onClick={handlePrevious}
            >
              <img src={flèche_précédent} alt="précédente" />
            </button>
            <button
              className="button_logement_black"
              style={length === 1 ? { display: 'none' } : {}}
              onClick={handleNext}
            >
              <img src={flèche_suivant} alt=" suivante" />
            </button>
          </div>
          <span
            className="index_picture_logement"
            style={length === 1 ? { display: 'none' } : {}}
          >
            <strong>{index + 1}/{arrayPictures.length}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;