import React, {useState, useEffect} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import axios from 'axios';
import '../App.css';

const Example = () => {
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
    
  return (
    <div>
      <Card className="card">
        <CardTitle className='card-title'>Photo of the Day</CardTitle>
        <CardImg className="photo" src={photo.hdurl} alt="Card Image" />
        <CardBody>
            <CardSubtitle className='photo-title'>{photo.title}</CardSubtitle>
            <CardText className='photo-explaination'>{photo.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;