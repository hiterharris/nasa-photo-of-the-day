import React, {useState} from 'react';
import Nav from './components/Nav';
import PhotoCard from './components/PhotoCard';
import './App.css';

export default function App() {

  function formatDate(date){
    let d = new Date(date), month= d.getMonth() + 1, day = d.getDate(),year = d.getFullYear();
    if (month < 10) { month = 0 + month}
    if (day < 10) { day = 0 + day}
    return `${year}-${month}-${day}`
  }

  const [counter, setCounter] = useState(0);

  let currDate = new Date();
  const [date,setDate]= useState(formatDate(currDate));

  function previousDate(){
    setCounter(counter + 1);
    const newDate = currDate.setDate(currDate.getDate()- counter);
    setDate(formatDate(newDate));
  }


  function nextDate(){
    if (counter > 0) {
      setCounter(counter - 1);
    }
    const newDate = currDate.setDate(currDate.getDate()- counter);
    setDate(formatDate(newDate));
  }

  return (
    <div className='app'>
      <Nav />
      <PhotoCard date={date} counter={counter} previousDate={previousDate} nextDate={nextDate} />
    </div>
  );
}
