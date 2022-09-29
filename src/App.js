import Student from './components/Student.js';
import Teacher from './components/Teacher.js';
import navbar from './components/navbar.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <navbar />
      <Student />
      <Teacher />
    </div>
  );
}

export default App;
