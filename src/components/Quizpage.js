import React, { useState } from 'react';
import FilterBar from './FilterBar'; 
import QuizTable from './QuizTable';  



const QuizPage = () => {

  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [searchText, setSearchText] = useState('');


  const quizzes = [
    { id: 1, title: "1.Независимый Казахстан", average: "70.6%", difficulty: "Easy", questions: 25, status: "Completed" },
    { id: 2, title: "1.Независимый Казахстан", average: "70.6%", difficulty: "Medium", questions: 25, status: "Completed" },
    { id: 3, title: "2.Древняя Греция", average: "85.4%", difficulty: "Hard", questions: 20, status: "Incomplete" },
    { id: 4, title: "2.Древняя Греция", average: "85.4%", difficulty: "Hard", questions: 20, status: "Incomplete" }
  ];

  const filteredQuizzes = quizzes.filter(quiz => 
    (selectedDifficulty === '' || quiz.difficulty === selectedDifficulty) &&
    quiz.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="quiz-page">
      {/* Pass filter state and setters to FilterBar */}
      <FilterBar
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      
      {/* Pass filtered quizzes to QuizTable */}
      <QuizTable quizzes={filteredQuizzes} />
    </div>
  );
  
}

export default QuizPage;
