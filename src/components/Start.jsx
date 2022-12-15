import React from 'react'
import './Start.css'

const Start = ({setShowQuiz, showQuiz, bestScore}) => {

  return (
    <div className='start'>
        <div className='quiz-head'>Quizzical</div>
        <div className='description'>Check your knowledge?</div>
        <button className='start-quiz' onClick={()=>{setShowQuiz(!showQuiz)}} >Start quiz</button>
        {bestScore > 0 && <div className='quiz-head'>Your best score is {bestScore}/5</div>} 
    </div>
  )
}

export default Start
