import React from "react";
import MediumSquareTraduction from './MediumSquareFormation';
import ReverseMediumSquareTraduction from './ReverseMediumSquareFormation';

const WhiteBarTraduction2 = ({isFirstInstance}) => {





        return (
            <>
                <div className="whitebar">
                        <MediumSquareTraduction instance={2}/>
                        <ReverseMediumSquareTraduction instance={2}/>
                </div>
            </>
        )

}

export default WhiteBarTraduction2;