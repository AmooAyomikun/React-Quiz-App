import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

const StartScreen = ({onStart, questions}) => {
  return (
    <div className="start-screen">

      <div className="start-icon">
        <FontAwesomeIcon icon={faBrain} />
      </div>
      
      <h1>General Knowledge Quiz</h1>
      <p>Test your knowledge across programming, science, geography, and history.</p>

      <div className="quiz-meta">
        <span>{questions.length} Questions</span>
        <span>~ 5 mins</span>
      </div>

      <button className="start-btn" type="button" onClick={onStart}>Start Quiz</button>
    </div>
  )
}

export default StartScreen