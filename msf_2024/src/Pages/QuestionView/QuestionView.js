import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
export default function QuestionView( { questions }) {
    const [showFinalResults, setFinalResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    const optionClicked = (isCorrect) => {
        console.log(isCorrect); 
        if (isCorrect){
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion+1);
        } else {
            setFinalResults(true);
        }
    }
    function navigateGame() {
        navigate("/Game", {score: score});
    }
return (
    <div className="question-card">    
        {showFinalResults ?   
        (  <div>
            <h1>Final Results</h1>
            <h3>Score: {score}</h3>
            <button onClick={() => navigateGame()}>Next</button>
        </div>) 
        :
        (<div>
            <h1>Question {currentQuestion+1} out of {questions.length} </h1>
            <h3>{questions[currentQuestion].text}</h3>
            <ul>
                {questions[currentQuestion].options.map((question) => (
                    <li onClick={() => optionClicked(question.isCorrect)} key={question.id}>{question.text}</li>
                ))}
            </ul>
        </div>)
    }
    </div>
);
};