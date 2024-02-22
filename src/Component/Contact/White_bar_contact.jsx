import React from "react";
import LittleSquare from "../Contact/Square";
import ReverseSquareContact from "../Contact/ReverseSquareContact";




const WhiteBar = ({isFirstInstanceContact}) => {

 

    return (
        <div className="whitebar">

            <LittleSquare />
            <ReverseSquareContact />

        </div>
    )
}

export default WhiteBar;