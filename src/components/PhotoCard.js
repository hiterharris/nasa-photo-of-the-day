import React, {useState, useEffect} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import PreviousDates from './PreviousDates';
import Buttons from './Buttons';
import axios from 'axios';
import '../App.css';

const PhotoCard = (props) => {

  const [photo, setPhoto] = useState([]);

  const date = props.date;
  const previousDate = props.previousDate;
  const nextDate = props.nextDate;
  const counter = props.counter;

  useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=d6VskTQApM8BQeNQ7m6Tm71eqdfqpvK2rXx03hKp&date=${date}`)
          .then(response => {
              setPhoto(response.data);
          })
          .catch(error => {
              console.log('Data Not Returned', error)
          })
  }, [date]);

  console.log(date);
    
  return (
    <div>
      <Card className="card">
        <CardTitle className='card-title'>Photo of the Day</CardTitle>
        <div className='dates'>
          <Buttons date={date} previousDate={previousDate} nextDate={nextDate} />
        </div>
        <CardImg className="photo" src={photo.url} alt="Card Image" />
        <CardBody>
            <CardSubtitle className='photo-title'>{photo.title}</CardSubtitle>
            <CardText className='photo-explaination'>{photo.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;