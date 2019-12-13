import React from "react";
import './../App.css';



function PreviousPhotos(props) {
    const previousDate = props.previousDate;
    const nextDate = props.nextDate;
    
    let button;
    if (previousDate < props.date) {
        button = <button className='buttons' onClick={() => nextDate()}>Next</button>
    }

    return (
        <div className='dates'>
            <p className='photo-date'>{props.date}</p>
            <button className='buttons' onClick={()=> previousDate()}>Previous Photos</button>
            {button}
        </div>  
    )
}

export default PreviousPhotos;
