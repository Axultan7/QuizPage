import React from 'react';
import './App.css'; 
import QuizPage from './components/Quizpage'; 
function App() {
  return (
    <div className="App">
      <div className='container'><h1 className='head'>Quizes</h1></div>
      <QuizPage />
    </div>
  );
}

export default App;
