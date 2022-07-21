import React, {useState} from 'react'
import PigDetails from './PigDetails';

function Pig({ hog }) {

    const[showDetails, setShowDetails] = useState(false);
    
    function handleClick()
    {
        setShowDetails(showDetails => !showDetails);
    }

    // console.log(hog)
    return (
    <div className="pigTile" onClick={handleClick}>
        <h1>{hog.name}</h1>
        <img src={hog.image} alt={hog.id}/>
        <PigDetails hog={showDetails ? hog : ""}/>
    </div>
    )
    
};

export default Pig;