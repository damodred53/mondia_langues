import React from "react";
import flèche_précédent from '../assets/flèche_précédent.png';
import flèche_suivant from '../assets/flèche_suivant.png';
import { useState } from "react";
import image1 from "../assets/presentation.webp";
import image2 from "../assets/5.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/9.webp";
import image5 from "../assets/2.webp";





const Carousel = () => {
    const arrayPictures = [
        image1,image2, image3, image4, image5
    ]
  const [index, setIndex] = useState(0);
  const length = arrayPictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <div className="pictureBackground">
        <div
          className="image_background_carousel"
          style={{ backgroundImage: `url(${arrayPictures[index]})` }}

          key={index}
        >
          <div className="buttons_logement">
            <button
              className="button_logement"
              style={length === 1 ? { display: 'none' } : {}}
              onClick={handlePrevious}
            >
            <img  src={flèche_précédent} alt="précédente" />
            </button>
            

            <button
              className="button_logement"
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

export default Carousel;



