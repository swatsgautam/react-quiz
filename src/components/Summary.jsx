import React from 'react'

const Summary = ({ results, onRestart }) => {
    const totalQuestions = results.length;
    const correctAnswers = results.filter(r => r.isCorrect).length;
    const wrongAnswers = results.filter(r => !r.isCorrect).length;
    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    return (
        <div className="summary">
            <h1>Quiz Summary</h1>
            <div className="summary-info">
                <p>Total Questions Answered: {totalQuestions}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Wrong Answers: {wrongAnswers}</p>
                <p>Percentage: {percentage.toFixed(2)}%</p>
            </div>
            <div className="question-details">
                {results.map((result, index) => (
                <div key={index} className="question-detail">
                    <p><strong>Question {index + 1}:</strong> {result.question}</p>
                    <p><strong>Your Answer:</strong> {result.selectedOption}</p>
                    <p><strong>Correct Answer:</strong> {result.correctOption}</p>
                </div>
                ))}
            </div>
            <button className="restart-button" onClick={onRestart}>Restart Quiz</button>
        </div>
    )
}

export default Summary
