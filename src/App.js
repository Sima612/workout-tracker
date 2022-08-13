import './style/css.css';
import Home from './components/Home';
import Todo from './components/Todo';
import History from './components/History';
import exerciseModel from './exerciseModel';

function App() {

  const addRow = (row) => {
    
  }

  return (
    <div className="App">
      <Home exerciseModel={exerciseModel}/>
      <Todo />
      <History />
    </div>
  );
}

export default App;
