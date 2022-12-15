import React, { useState } from 'react'
import Question from './Question';
import './Quiz.css'

const Quiz = ({quizData, setShowQuiz, countAnswers, setCountAnswers}) => {
  
  const [submitToggle, setSubmitToggle] = useState(false)
  
  const quizElements = quizData.map((element, id) => 
    <div className='quiz' key={id}>
      <Question 
        element={element} 
        qId={id}
        countAnswers={countAnswers} 
        setCountAnswers={setCountAnswers}
        submitToggle={submitToggle}
      />
    </div>
  )
  
  function handleSubmit(event) {
    setShowQuiz(false)
    setCountAnswers(0)
  }

  return (
    <div>
      {quizElements}
      {submitToggle 
      ? 
        <div className='count-answers'>
          You scored {countAnswers}/5 correct answers
          <button className='check-answers' onClick={handleSubmit}>Play Again</button>
        </div>
      :
        <div className='check-answers-div'>
          <button className='check-answers'  
            onClick={()=> 
            {setSubmitToggle(true)}}>
              Check Answers
          </button>
        </div>}
    </div>
  )
}

export default Quiz
