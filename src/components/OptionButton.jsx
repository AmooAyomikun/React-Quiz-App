import React from 'react'

const OptionButton = ({option, selectedAnswer, correctAnswer, onAnswer, letter}) => {
  let status;
  if (selectedAnswer === null){
    status = "default"
  }else if (selectedAnswer !== null && option === correctAnswer){
    status = "correct"
  }else if (selectedAnswer === option && option !== correctAnswer){
    status = "wrong"
  } else{
    status = "default"
  }
  return (
    <div className='options'>
      <button 
            type="button"
            onClick={() => onAnswer(option)} 
            className={status === "correct" ? "opt correct" : status === "wrong" ? "opt wrong" : "opt" }
            disabled = {selectedAnswer !== null}
      >
        <span className="option-letter">{letter}</span>
        <span>{option}</span>
      </button>
    </div>
  )
}

export default OptionButton