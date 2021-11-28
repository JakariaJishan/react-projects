import { useEffect, useState } from 'react';
import './App.css';
import Courses from './componants/Courses/Courses';

function App() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch('https://mocki.io/v1/7c52b8b8-8130-49b0-a8ae-fbb50b9bf565?fbclid=IwAR1gnUZl-7jtLv_dEq2HaCrVqS-YncU_Gjd68iOAIu1vJJ_nQ5H4zjnM7JA')
    .then(res => res.json())
    .then(data => {
      setCourse(data);
    });
  },[])

  return (
    <div className="App">
     <h1>hello world</h1>
     <Courses></Courses>
    {
      course.map((x) => <li>{x.title + x.price}</li>)
    }
     
    </div>
  );
}

export default App;
