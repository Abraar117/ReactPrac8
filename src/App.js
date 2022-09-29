import Student from './components/Student.js';
import Teacher from './components/Teacher.js';
import Navigation from './components/Navigation.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Student />
      <Teacher />
    </div>
  );
}

export default App;
