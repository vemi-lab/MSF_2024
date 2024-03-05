import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionView.css";
export default function QuestionView( { toggleQuestions, questions, pageID, currentUserData}) {
    const [showFinalResults, setFinalResults] = useState(false);
    const [toggleRestart, setRestart] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1); // Use the functional form of setState
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            if (score + 1 >= questions.length) { // Check score + 1
                setRestart(true);
                console.log("HIDE Restart");
            }
            console.log("Questions: " + (score + 1)); // Update this line as well
            setFinalResults(true);
        }
    }
    
    function navigateGame() {
        const currentScore = currentUserData !=null ? currentUserData.score : 0;
        const updatedScore = score + currentScore;
        var newCompletedDemos = [pageID];
        if (currentUserData !=null) {
            currentUserData.completedDemos.push(pageID)
            newCompletedDemos = currentUserData.completedDemos;
        }
        console.log(newCompletedDemos);
        const userData = {completedDemos: newCompletedDemos, score: updatedScore}
        navigate("/Game", {replace: true, state: {userData}});
    }
    function navigateToVideo(){
        console.log("Set parent")
        toggleQuestions(false);
    }

return (
    <div className="question-card">    
        {showFinalResults ?   
        (  <div>
            <h1>Final Results</h1>
            <h3>Score: {score + (currentUserData !=null ? currentUserData.score : 0)}</h3>
                       
            { toggleRestart ?  <></> : <button className="button" onClick={() => navigateToVideo()}>Restart</button> }
            
            <button className="button" onClick={() => navigateGame()}>Next</button>
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
}
