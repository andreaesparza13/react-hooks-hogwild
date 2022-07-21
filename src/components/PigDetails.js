import React from "react";

function PigDetails({ hog })
{
    const {greased,weight,"highest medal achieved": medal} = hog;
    
    return (
        <div>
           <p>{weight}</p>
           <p>{greased ? "greased":null}</p>
           <p>{medal}</p>
        </div>
    )
}

export default PigDetails;