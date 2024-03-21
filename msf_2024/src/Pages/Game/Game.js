import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DemoButton from '../../components/DemoButton';
import ReactConfetti from 'react-confetti';

export default function Game() {
    const location = useLocation();
    const [completedPages, setCompletedPages] = useState({});
    const [showEndScreen, setShowEndScreen] = useState(false);
    const [completedQuestions, setCompletedQuestions] = useState(1);
    const totalQuestions = 6;

    useEffect(() => {
        if (location.state && location.state.userData) {
            checkForCompletedPage();
        }
        checkForEndOfGame();
        checkForCompletedQuestions();
    }, [location]);

    function checkForCompletedPage() {
        const completed = {};
        for (const id of pageInfo.pageIDs) {
            completed[id] = location.state.userData.completedDemos.includes(id);
        }
        console.log(completed);
        setCompletedPages(completed);
    }

    function checkForEndOfGame(){
        const numCompletedDemos= location.state !=null ? location.state.userData.completedDemos.length : 0;
        if(numCompletedDemos == pageInfo.pageIDs.length){
            setShowEndScreen(true);
        }
    }

    function checkForCompletedQuestions(){
        const completedQuestionNum = location.state != null ? location.state.userData.completedQuestions : 1;
        setCompletedQuestions(completedQuestionNum);
    }

    const pageInfo = {
        pageIDs: ["/Catheters", "/HowToResearch", "/SimInfo", "/PFAS", "/Rainbows", "/Ultrahaptics"],
        pageNames: ["Catheters", "How To Research", "Autonomous Simulator", "PFAS", "Rainbows", "Ultrahaptics"],
        pageCodes: ["15070", "68978", "74343", "81294", "98765", "23564"]
    };

    return (
        <div>
            {( showEndScreen ? <h1>Congratulations</h1> : <h1>Score</h1>)}
            {( showEndScreen ? <h2>Final Score {location.state!=null ? (location.state.userData.score/completedQuestions * 100).toPrecision(3) : 0}%</h2> : <h2>{location.state!=null ? (location.state.userData.score/completedQuestions * 100).toPrecision(3) : 0}%</h2>)}
           
            {( showEndScreen ?  <ReactConfetti/>: pageInfo.pageIDs.map((id, index) => (
                <DemoButton
                    key={index}
                    userData={location.state!=null ? location.state.userData : null}
                    pageID={id}
                    buttonText={pageInfo.pageNames[index]}
                    code={pageInfo.pageCodes[index]}
                    isCompleted={completedPages[id] || false}
                />
            )))}

        </div>
    );
}
