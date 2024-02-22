import React from "react";

const LittleSquare = (props) => {


    return(
        <div className="square" >
            <p>Données reçues : {props.text_1}</p>
        </div>
    )
}

export default LittleSquare;