import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';

export default function Rainbows() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(false);
    const questions = [
        {
            text: "How do germs spread?",
            options: [
                {id: 0, text: "By flying in the air", isCorrect: false},
                {id: 1, text: "By jumping from person to person", isCorrect: false},
                {id: 2, text: "By touching surfaces like doorknobs and railings", isCorrect: true}
            ]
        },
        {
            text: "What can happen if we leave germs on surfaces?",
            options: [
                {id: 0, text: "They turn into toys", isCorrect: false},
                {id: 1, text: "They make people sick", isCorrect: true},
                {id: 2, text: "They create rainbows", isCorrect: false}
            ]
        },
        {
            text: "What does the smartphone-based system do?",
            options: [
                {id: 0, text: "Plays music", isCorrect: false},
                {id: 1, text: "Takes pictures of clouds", isCorrect: false},
                {id: 2, text: "Detects germs on surfaces", isCorrect: true}
            ]
        },
        {
            text: "How does the system detect germs?",
            options: [
                {id: 0, text: "By smelling them", isCorrect: false},
                {id: 1, text: "By creating bright rainbows that change when a surface is dirty", isCorrect: true},
                {id: 2, text: "By making funny noises", isCorrect: false}
            ]
        },
    ];
    const options = {
        width:'100%',
        height:'100%',
      };
  
    return (
        <div>
            <h1>Rainbows Page!</h1>
            {toggleQuestions ? 
            <QuestionView toggleQuestions={setQuestions} questions={questions} pageID={state.pageID} currentUserData={state.userData} ></QuestionView>:
            <YouTube videoId="-vJg0fhKrhI" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            }
        </div>
    );
}