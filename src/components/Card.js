import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

function Card() {
    const [photo, setPhoto] = useState([]);

    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=d6VskTQApM8BQeNQ7m6Tm71eqdfqpvK2rXx03hKp')
            .then(response => {
                setPhoto(response.data);
            })
            .catch(error => {
                console.log('Data Not Returned', error)
            })
    }, []);

    console.log(photo);

    return (
        <div className='Card'>
            <div className='card-title'>Photo of the Day</div>
            <div className='photo-date'>{photo.date}</div>
            <img className='photo' alt='' src={photo.hdurl} />
            <div className='photo-title'>{photo.title}</div>
            <div className='photo-explaination'>{photo.explanation}</div>

        </div>
    );
}

export default Card;
