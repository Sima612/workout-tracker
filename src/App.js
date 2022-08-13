import './style/css.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import History from './components/History';
import exerciseModel from './exerciseModel';
import CurrentWorkouts from './components/CurrentWorkouts';

function App() {
  const [ newRow, setNewRow ] = useState([{
    date: Date,
    exercise: "",
    sets: "",
    reps: "",
    lbs: ""
  }]);
  const [ workoutArr, setWorkoutArr ] = useState([])

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
      <Home 
        exerciseModel={exerciseModel}
        addRow={addRow}
        newRow={newRow}
        getAllWorkouts={getAllWorkouts}/>
      <CurrentWorkouts 
        workoutArr={workoutArr}/>
      <History />
    </div>
  );
}

export default App;
