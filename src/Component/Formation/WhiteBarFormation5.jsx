import React from "react";
import MediumSquareTraduction from './MediumSquareFormation';
import ReverseMediumSquareTraduction from './ReverseMediumSquareFormation';

const WhiteBarTraduction5 = ({isFirstInstance}) => {





        return (
            <>
                <div className="whitebar">
                        <MediumSquareTraduction instance={5}/>
                        <ReverseMediumSquareTraduction instance={5}/>
                </div>
            </>
        )

}




export default WhiteBarTraduction5;