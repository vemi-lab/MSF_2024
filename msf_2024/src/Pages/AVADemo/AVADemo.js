import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';

export default function AVADemo() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(true);
    const questions = [
        {
            text: "What do you think?",
            options: [
                {id: 0, text: "Answer 1", isCorrect: false},
                {id: 1, text: "Answer 2", isCorrect: false},
                {id: 2, text: "Answer 3", isCorrect: true}
            ]
        },
        {
            text: "IDK?",
            options: [
                {id: 0, text: "Answer 1", isCorrect: false},
                {id: 1, text: "Answer 2", isCorrect: true},
                {id: 2, text: "Answer 3", isCorrect: false}
            ]
        },
    ];
    const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
    return (
        <div>
            <h1>AVA Demo Page!</h1>
            {toggleQuestions ? 
            <YouTube videoId="-vJg0fhKrhI" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            : <QuestionView questions={questions} pageID={state.pageID} currentUserData={state.userData} ></QuestionView>}
        </div>
    );
}