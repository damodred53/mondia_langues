import React from "react";
import MediumSquareTraduction from './MediumSquareTraduction';
import ReverseMediumSquareTraduction from './ReverseMediumSquareTraduction';

const WhiteBarTraduction2 = ({isFirstInstance}) => {





        return (
            <div>
                <div className="whitebar">
                        <MediumSquareTraduction instance={2}/>
                        <ReverseMediumSquareTraduction instance={2}/>
                </div>
            </div>
        )

}

export default WhiteBarTraduction2;