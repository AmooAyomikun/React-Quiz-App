import React from 'react'

const ProgressBar = ({current, total}) => {
  const display = `Question ${current + 1} of ${total}`
  const percentage = ((current + 1) / total) * 100
  return (
    <div>
      <div className="progress-top">
        <p>{display}</p>
        <p>{Math.round(percentage)}%</p>
      </div>
      <div className="track">
        <div className='fill' style={{width:`${percentage}%`}}></div>
      </div>
    </div>
  )
}

export default ProgressBar