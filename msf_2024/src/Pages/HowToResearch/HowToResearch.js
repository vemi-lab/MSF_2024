import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionView from '../QuestionView/QuestionView';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player/youtube';
import "../DemoPages.css";

export default function HowToResearch() { 
    const {state} = useLocation();
    const [toggleQuestions, setQuestions] = useState(false);
    const questions = [
        {
            text: "What is the scientific method used for?",
            options: [
                {id: 0, text: "Discovering answers to new questions", isCorrect: true},
                {id: 1, text: "Making cookies", isCorrect: false},
                {id: 2, text: "Playing games", isCorrect: false}
            ]
        },
        {
            text: "What is a hypothesis?",
            options: [
                {id: 0, text: "A type of flower", isCorrect: false},
                {id: 1, text: "An educated guess to answer a question", isCorrect: true},
                {id: 2, text: "A type of bird", isCorrect: false}
            ]
        },
        {
            text: "What is the independent variable in the ice melting experiment?",
            options: [
                {id: 0, text: "The type of ice used", isCorrect: false},
                {id: 1, text: "The time it takes for the ice to melt", isCorrect: false},
                {id: 2, text: "Whether the water has salt or no salt", isCorrect: true}
            ]
        },
        {
            text: "How do researchers present their conclusions?",
            options: [
                {id: 0, text: "By writing papers and giving presentations", isCorrect: true},
                {id: 1, text: "By making sandwiches", isCorrect: false},
                {id: 2, text: "By singing songs", isCorrect: false}
            ]
        },
    ];
    const options = {
        width:'100%',
        height:'100%',
      };
  
    return (
        <div className='video-card'>
            <h1>How To Research Page!</h1>
            {toggleQuestions ? 
            <QuestionView toggleQuestions={setQuestions} questions={questions} pageID={state.pageID} currentUserData={state.userData}></QuestionView>:
            <ReactPlayer onEnded={() => setQuestions(!toggleQuestions)} width="100%" url='https://www.youtube.com/watch?v=DeCLQzRl8r0'></ReactPlayer>
            // <YouTube videoId="DeCLQzRl8r0" onEnd={() => setQuestions(!toggleQuestions)} options={options} id="video"/> 
            }
        </div>
    );
}