import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';

export default function Catheters() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(false);
    const questions = [
        {
            text: "What's a catheter, and why do some people need it?",
            options: [
                {id: 0, text: "A tube to help with going to the bathroom when very sick", isCorrect: true},
                {id: 1, text: "A special tube for breathing", isCorrect: false},
                {id: 2, text: "A tool for drawing blood", isCorrect: false}
            ]
        },
        {
            text: "How did the superhero scientists want to stop infections from happening with catheters?",
            options: [
                {id: 0, text: "Making them colorful", isCorrect: false},
                {id: 1, text: "Making them super slippery", isCorrect: true},
                {id: 2, text: "Making them extra long", isCorrect: false}
            ]
        },
        {
            text: "What did the scientists do to make the catheter slippery?",
            options: [
                {id: 0, text: "Added sticky glue", isCorrect: false},
                {id: 1, text: "Wrapped it in paper", isCorrect: false},
                {id: 2, text: "Infused it with a special oil", isCorrect: true}
            ]
        },
        {
            text: "Why is the invention important for sick people who need catheters?",
            options: [
                {id: 0, text: "It makes them fly", isCorrect: false},
                {id: 1, text: "It helps them play music", isCorrect: false},
                {id: 2, text: "It stops germs from making them sick", isCorrect: false}
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
            <h1>Catheters!</h1>
            {toggleQuestions ? 
            <QuestionView toggleQuestions={setQuestions} questions={questions} pageID={state.pageID} currentUserData={state.userData} ></QuestionView>:
            <YouTube videoId="-vJg0fhKrhI" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            }
        </div>
    );
}