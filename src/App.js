import './style/css.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import React, { useState } from 'react';
import Home from './components/Home';
import CurrentWorkouts from './components/CurrentWorkouts';

function App() {
  const [newRow, setNewRow] = useState([]);
  const [workoutArr, setWorkoutArr] = useState([])

  //Function to add new row
  const addRow = () => {

    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exerciseName').value;
    const select = document.getElementById('select').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const lbs = document.getElementById('lbs').value;

    setNewRow((x) => [...x,
    {
      date: date,
      exercise: exercise,
      select: select,
      sets: sets,
      reps: reps,
      lbs: lbs
    }])
  }

  const getAllWorkouts = () => {
    setWorkoutArr(newRow)
  }

  return (
    <div className="App">
      <Router>

        <Navbar className="navbar">
          
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/CurrentWorkout'>Workout</Link>
           
        </Navbar>

        <Routes>

          <Route path='/' element={<Home
            addRow={addRow}
            newRow={newRow}
            getAllWorkouts={getAllWorkouts} />}>
          </Route>
          <Route path='/CurrentWorkout' element={<CurrentWorkouts
            workoutArr={workoutArr} />}>
          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
