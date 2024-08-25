import React, {useState,useEffect} from 'react'
import questions from './questions';
import Summary from './Summary';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //tracks the index of the current question
    const [selectedOption, setSelectedOption] = useState(null); //stores the index of the option selected
    const [timer, setTimer] = useState(10); //Manages the timer which starts at 10 seconds    
    const [results, setResults] = useState([]); //array to store the result of each question- selected by user and correct answer.
    const [quizCompleted, setQuizCompleted] = useState(false); //boolean for knowing whether quiz has ended 
  
    const currentQuestion = questions[currentQuestionIndex]; //fetch the question object for current index from questions.js
  
    useEffect(() => { //for managing count timer
        const id = setInterval(() => {
          setTimer(prev => {
            if (prev <= 1) {
              clearInterval(id); //when timer is 1 it clears the interval
              handleAnswer(null); // Handle timeout
              return 10; //reset the timer to 10 seconds
            }
            return prev - 1; //decrease timer by 1 second
          });
        }, 1000);
    
        return () => clearInterval(id); //
      }, [currentQuestionIndex]);

      const handleAnswer = (index) => { //passed index as parameter 
        const isCorrect = index === currentQuestion.answer; //checks if selected option match the correct option
        setResults(prev => [ //prev is previous state of results
          ...prev, //includes existing results in new
          {
            //adds object like text of question, selected option, correct answer, boolean to check whether option is right
            question: currentQuestion.question,
            selectedOption: currentQuestion.options[index],
            correctOption: currentQuestion.options[currentQuestion.answer],
            isCorrect
          }
        ]);
    
        setSelectedOption(index); //sets the selected option state to the index selected by user

        //delay of 1 second to proceed for next
        setTimeout(() => {
          if (currentQuestionIndex + 1 < questions.length) { 

            setCurrentQuestionIndex(prev => prev + 1); //for next question, it just moves to next
            setSelectedOption(null); //reset the selected option to nullfor next question
            setTimer(10); //reset the timer to 10 seconds
          } else {
            setQuizCompleted(true); //shows quiz has ended
          }
        }, 1000);
      };
    
      //reset all the values to initial values if quiz is restart
      const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setTimer(10);
        setResults([]);
        setQuizCompleted(false);
      };

  return (
    <div className="quiz">
        {quizCompleted ? (
            <Summary results={results} onRestart={handleRestart} />
        ) : (
        <>
            <h1>Quiz App</h1>
            <div className="question">{currentQuestion.question}</div>
            <div className="options">
                {currentQuestion.options.map((option, index) => {
                    let className = 'option-button';
                    if (selectedOption !== null) { //if the option is selected (adds class as correct or incorrect)
                        className += index === currentQuestion.answer ? ' correct' : index === selectedOption ? ' incorrect' : '';
                    }
                    else { // if no option is selected ass selected or reset class
                        className += index === selectedOption ? ' selected' : ' reset'; 
                    }
                    return (
                        <button
                            key={index}
                            id={`option-${index}`}
                            className={className}
                            onClick={() => handleAnswer(index)}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            <div className="timer">Time: {timer}</div>

        </>
        )}
    </div>
    )
}

export default Quiz