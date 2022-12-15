import React,{useState} from 'react'
import Answer from './Answer';
import './Question.css'

const Question = ({element,qId,countAnswers, setCountAnswers, submitToggle}) => {
  
  const [questionVisited, setQuestionVisited] = useState(false)

  return (
    <>
        <h3 className='questions'>{element.question}</h3>
        <div className='answers'>

        {element.incorrect_answers.map
          ((answer,id)=> 
            <Answer 
                answer={answer} 
                key={id}
                qId={qId}
                correct_answer={element.correct_answer}
                questionVisited={questionVisited}
                setQuestionVisited={setQuestionVisited}
                countAnswers={countAnswers}
                setCountAnswers={setCountAnswers}
                submitToggle={submitToggle}
            />
        )}
        </div>
      <hr className='hr'/>
    </>
  )
}

export default Question