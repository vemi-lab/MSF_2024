import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';
import "../DemoPages.css";

export default function SimInfo() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(false);
    const questions = [
        {
            text: "What is a fully autonomous vehicle simulator like?",
            options: [
                {id: 0, text: "It's like a big, awesome car game", isCorrect: true},
                {id: 1, text: "It's like a magical playset with screens and computers", isCorrect: false},
                {id: 2, text: "It's like a giant book with pictures", isCorrect: false}
            ]
        },
        {
            text: "What makes autonomous vehicles special?",
            options: [
                {id: 0, text: "They have wings and can fly", isCorrect: false},
                {id: 1, text: "They can drive themselves", isCorrect: true},
                {id: 2, text: "They can talk to animals", isCorrect: false}
            ]
        },
        {
            text: "How do autonomous vehicles \"see\" the world around them?",
            options: [
                {id: 0, text: "They use super smart sensors that act like eyes", isCorrect: true},
                {id: 1, text: "They use magic spells", isCorrect: false},
                {id: 2, text: "hey close their eyes and guess", isCorrect: false}
            ]
        },
        {
            text: "How do autonomous vehicles help make roads safer?",
            options: [
                {id: 0, text: "By causing accidents", isCorrect: false},
                {id: 1, text: "By driving really fast", isCorrect: false},
                {id: 2, text: "By helping scientists and engineers learn how to make roads safer", isCorrect: true}
            ]
        },
    ];
    const options = {
        width:'100%',
        height:'100%',
      };
  
    return (
        <div className='video-card'>
            <h1>Autonomous Simulator Page!</h1>
            {toggleQuestions ? 
            <QuestionView toggleQuestions={setQuestions} questions={questions} pageID={state.pageID} currentUserData={state.userData}></QuestionView>:
            <YouTube videoId="1k_odA-x0ck" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            }
        </div>
    );
}