import React from "react";
import MediumSquareTraduction from './MediumSquareFormation';
import ReverseMediumSquareTraduction from './ReverseMediumSquareFormation';

const WhiteBarTraduction = ({isFirstInstance}) => {





        return (
            <>
                <div className="whitebar">
                        <MediumSquareTraduction instance={1}/>
                        <ReverseMediumSquareTraduction instance={1}/>
                </div>
            </>
        )

}




export default WhiteBarTraduction;