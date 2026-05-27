import React from 'react'

const ResultScreen = ({score, total, onRestart}) => {
    const percentage = Math.round(((score) / (total)) * 100)
    const wrong = total - score
    let resultTitle

    if(percentage === 100){
        resultTitle = "Perfect score!"
    }else if(percentage >= 70) {
        resultTitle = "Great work!"
    }else if(percentage >= 50){
        resultTitle = "Good effort!"
    }else{
        resultTitle = "Keep practising!"
    }
  return (
    <div className='result-screen'>
        <div className="result-card">
            <div className="score-circle">
                <h1>{score}</h1>
                <p>out of {total}</p>
            </div>

            <h2 className='result-title'>{resultTitle}</h2>
            <p className='result-subtitle'>You scored {percentage}%</p>
            <div className="stats-row">
                <div className="stat-card">
                    <h3>{score}</h3>
                    <p>Correct</p>
                </div>

                <div className="stat-card">
                    <h3>{wrong}</h3>
                    <p>Wrong</p>
                </div>

                <div className="stat-card">
                    <h3>{percentage}%</h3>
                    <p>Percentage</p>
                </div>
            </div>
    
            <button className='restart-btn' type="button" onClick={onRestart}>Try Again</button>
        </div>
    </div>
  )
}

export default ResultScreen