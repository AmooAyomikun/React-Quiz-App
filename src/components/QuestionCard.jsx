import React from 'react'
import ProgressBar from './ProgressBar'
import OptionButton from './OptionButton'

const QuestionCard = ({question, selectedAnswer, onAnswer, onNext, current}) => {
  const letters = ["A", "B", "C", "D"]
  return (
    <div>
      <span>Question {current + 1}</span>
      <p className='question-text'>{question.question}</p>
      <p className='question-category'>{question.category}</p>

      {question.options.map((option, index) => {
        return <OptionButton 
                key={option}
                option = {option} 
                selectedAnswer ={selectedAnswer} 
                correctAnswer = {question.answer} 
                onAnswer = {onAnswer}
                letter = {letters[index]} 
              />
      })}

      {selectedAnswer !== null && 
        <div className="explanation">
          {selectedAnswer === question.answer 
          ? <p>{question.explanation}</p> 
          : <p>Correct Answer: {question.answer} <br/> {question.explanation}</p>}
        </div>
      }
      {selectedAnswer !== null && <button className='next-btn' type="button" onClick={onNext}>Next Question</button>}
    </div>
  )
}

export default QuestionCard