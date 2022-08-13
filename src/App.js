import './style/css.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Todo from './components/Todo';
import History from './components/History';
import exerciseModel from './exerciseModel';

function App() {
  const [ newRow, setNewRow ] = useState([exerciseModel]);

  const addRow = () => {

    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exerciseName').value;
    const select = document.getElementById('select').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const lbs = document.getElementById('lbs').value;

    setNewRow((x) => [...x,
    {
      id: newRow.length + 1,
      date: date,
      exercise: exercise,
      select: select,
      sets: sets,
      reps: reps,
      lbs: lbs
    }])
  }

  return (
    <div className="App">
      <Home 
        exerciseModel={exerciseModel}
        addRow={addRow}
        newRow={newRow}/>
      <Todo />
      <History />
    </div>
  );
}

export default App;
