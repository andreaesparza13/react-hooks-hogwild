import React from 'react';
import Pig from './Pig';

function PigList({hogs}){

    return(
        <div className="pigList">
            {hogs.map(hog => {
                return (<Pig key={hog.name} hog={hog}/>)
                })
            }
        </div>
    )
}


export default PigList;



