import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';
import "../DemoPages.css";

export default function Ultrahaptics() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(false);
    const questions = [
        {
            text: "What are ultrasonic haptic waves like?",
            options: [
                {id: 0, text: "They're like colorful rainbows", isCorrect: false},
                {id: 1, text: "They're like big, crashing waves at the beach", isCorrect: false},
                {id: 2, text: "They're like little ticklish waves that gently tickle the nerves in your hand", isCorrect: true}
            ]
        },
        {
            text: "What does Ultrahaptics do?",
            options: [
                {id: 0, text: "It helps you see better", isCorrect: false},
                {id: 1, text: "It makes loud noises", isCorrect: false},
                {id: 2, text: "It's a secret superpower in your hand that lets you feel things without touching them", isCorrect: true}
            ]
        },
        {
            text: "How does Ultrahaptics draw shapes on your hand?",
            options: [
                {id: 0, text: "By sending little pulses that feel like tiny pokes or taps", isCorrect: true},
                {id: 1, text: "By using magic spells", isCorrect: false},
                {id: 2, text: "By making your hand disappear", isCorrect: false}
            ]
        },
        {
            text: "Why are ultrasonic haptic waves helpful?",
            options: [
                {id: 0, text: "Because they make you sleepy", isCorrect: false},
                {id: 1, text: "Because they're like a magical way to interact with stuff without touching it", isCorrect: true},
                {id: 2, text: "Because they make your hair stand up", isCorrect: false}
            ]
        },
    ];
    const options = {
        width:'100%',
        height:'100%',
      };
  
    return (
        <div className='video-card'>
            <h1>Ultrahaptics Page!</h1>
            {toggleQuestions ? 
            <QuestionView toggleQuestions={setQuestions} questions={questions} pageID={state.pageID} currentUserData={state.userData} ></QuestionView>:
            <YouTube videoId="-vJg0fhKrhI" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            }
        </div>
    );
}