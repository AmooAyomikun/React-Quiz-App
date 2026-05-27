import React from 'react'
import questions from './data'
import QuestionCard from './components/QuestionCard'
import ProgressBar from './components/ProgressBar'
import ResultScreen from './components/ResultScreen'
import StartScreen from './components/StartScreen'

const App = () => {
  const [screen, setScreen] = React.useState("start")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [score, setScore] = React.useState(0)
  const [selectedAnswer, setSelectedAnswer] = React.useState(null)
  const [isAnswered, setIsAnswered] = React.useState(false)

  function handleStart(){
    setScreen("quiz")
  }

  function handleAnswer(option){
    if(isAnswered){
      return
    }

    setSelectedAnswer(option)
    setIsAnswered(true)

     if(option === questions[currentIndex].answer){
      setScore(prev => prev + 1)
     }
  }

  function handleNext(){
    const nextIndex = currentIndex + 1
    if(nextIndex <  questions.length){
      setCurrentIndex(nextIndex)
      setSelectedAnswer(null)
      setIsAnswered(false)
    }else{
      setScreen("result")
    }
  }

  function handleRestart(){
    setScreen("start")
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
  }

  return (
    <main className="app">
      {screen === "start" && <StartScreen onStart = {handleStart} questions={questions} /> }

      {screen === "quiz" && <section className="quiz-container">
          <ProgressBar current={currentIndex} total={questions.length} />
          <QuestionCard 
              question = {questions[currentIndex]}
              onNext = {handleNext}
              onAnswer = {handleAnswer}
              current = {currentIndex}
              selectedAnswer= {selectedAnswer}
              total = {questions.length} 
          />
        </section>
      } 

      {screen === "result" && <ResultScreen score={score} total={questions.length} onRestart = {handleRestart} />} 
    </main>
  )
}

export default App