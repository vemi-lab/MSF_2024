import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';

export default function PFAS() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(false);
    const questions = [
        {
            text: "What are PFAS?",
            options: [
                {id: 0, text: "Tiny bugs", isCorrect: false},
                {id: 1, text: "Itty bitty groups of bad chemicals", isCorrect: true},
                {id: 2, text: "Colorful candies", isCorrect: false}
            ]
        },
        {
            text: "Why can PFAS make you feel sick?",
            options: [
                {id: 0, text: "Because they taste bad", isCorrect: false},
                {id: 1, text: "ecause they make you laugh too much", isCorrect: false},
                {id: 2, text: "Because they take a long time for our bodies to break down", isCorrect: true}
            ]
        },
        {
            text: "What is a microplastic?",
            options: [
                {id: 0, text: "A type of toy", isCorrect: false},
                {id: 1, text: "A tiny piece of broken down plastic", isCorrect: true},
                {id: 2, text: "A big ball of yarn", isCorrect: false}
            ]
        },
        {
            text: "How do scientists help us understand how small PFAS are?",
            options: [
                {id: 0, text: "By creating a virtual environment to visualize their size", isCorrect: true},
                {id: 1, text: "By building tall towers", isCorrect: false},
                {id: 2, text: "By drawing pictures on walls", isCorrect: false}
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
            <h1>Rainbows!</h1>
            {toggleQuestions ? 
            <QuestionView toggleQuestions={setQuestions} questions={questions} pageID={state.pageID} currentUserData={state.userData} ></QuestionView>:
            <YouTube videoId="-vJg0fhKrhI" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            }
        </div>
    );
}