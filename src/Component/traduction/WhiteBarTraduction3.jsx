import React from "react";
import MediumSquareTraduction from './MediumSquareTraduction';
import ReverseMediumSquareTraduction from './ReverseMediumSquareTraduction';

const WhiteBarTraduction3 = ({isFirstInstance}) => {





        return (
            <>
                <div className="whitebar">
                        <MediumSquareTraduction instance={3}/>
                        <ReverseMediumSquareTraduction instance={3}/>
                </div>
            </>
        )

}

export default WhiteBarTraduction3;