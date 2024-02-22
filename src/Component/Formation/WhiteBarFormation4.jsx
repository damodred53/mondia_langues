import React from "react";
import MediumSquareTraduction from './MediumSquareFormation';
import ReverseMediumSquareTraduction from './ReverseMediumSquareFormation';

const WhiteBarTraduction3 = ({isFirstInstance}) => {





        return (
            <>
                <div className="whitebar">
                        <MediumSquareTraduction instance={4}/>
                        <ReverseMediumSquareTraduction instance={4}/>
                </div>
            </>
        )

}

export default WhiteBarTraduction3;