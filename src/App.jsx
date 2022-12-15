import React, { Suspense, useState, useEffect } from 'react'
import './App.css'

function App() {

  const localBestScore = JSON.parse(localStorage.getItem('bestScore' || 0))
  const [quizData, setQuizData] = useState()
  const [showQuiz, setShowQuiz] = useState(false)
  const [countAnswers, setCountAnswers] = useState(0)
  const [bestScore, setBestScore] = useState(localBestScore || 0)  

  const Start = React.lazy(() => import('./components/Start'));
  const Quiz = React.lazy(() => import('./components/Quiz'));

  function insertCorr(arr, corr) {
    const randInd = Math.floor(Math.random() * 4)
    arr.splice(randInd, 0, corr)
  }

  useEffect(() => {
      if(countAnswers > bestScore){ 
       setBestScore(countAnswers) 
       localStorage.setItem('bestScore',JSON.stringify(bestScore+1))
      }
  }, [countAnswers])
  

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(response => response.json())
    .then(data =>{
      for(let i=0; i<data.results.length; i++){
        insertCorr(data.results[i].incorrect_answers, data.results[i].correct_answer)
      }
      setQuizData(data.results)
    })
  }, [showQuiz])
  

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      {showQuiz === false 
        ? 
        <>
        <Start 
            setShowQuiz={setShowQuiz} 
            showQuiz={showQuiz} 
            countAnswers={countAnswers} 
            setCountAnswers={setCountAnswers} 
            bestScore={bestScore} 
          />
            
        </>  
        : <Quiz 
            quizData={quizData} 
            setShowQuiz={setShowQuiz} 
            countAnswers={countAnswers} 
            setCountAnswers={setCountAnswers} 
          /> 
      }
      </Suspense>
    </div>
  )
}

export default App
