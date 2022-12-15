import React, {useState} from 'react'
import './Answer.css'


const Answer = ({answer, qId, correct_answer, questionVisited, setQuestionVisited, countAnswers, setCountAnswers, submitToggle}) => {
  
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [correctColor, setCorrectColor] = useState(false)

  function handleClick(answer,correct_answer)  {
    if(!questionVisited) { 
      if(answer == correct_answer){
        setCorrectColor(true)
        setSelectedAnswer(true)
        setCountAnswers(countAnswers+1)
        
      }else{ 
        setSelectedAnswer(true)
      }
    }
  }
  return (
    <div className='answer-div'>
        <button id={qId} 
          className='answer' 
          style={{backgroundColor: 
              submitToggle ? (correctColor ? '#94D7A2' : (selectedAnswer && '#F8BCBC')) : selectedAnswer && '#D6DBF5'
            }} 
          onClick={(e)=> 
            {
              setQuestionVisited(true)
              handleClick(answer,correct_answer)  
          }
        }>
            {answer}
        </button> 
    </div>
  )
}

export default Answer