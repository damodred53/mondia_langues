import React from "react";
import LittleSquareEntreprise from "./LittleSquareEntreprise";
import BigSquareEntreprise from "./BigSquareEntreprise";


const WhiteBarEntreprise = ({isFirstInstance}) => {

        return (
            <>
                <div className="whitebar">
                    <LittleSquareEntreprise />
                    <BigSquareEntreprise />
                </div>
            </>
        )

}

export default WhiteBarEntreprise;