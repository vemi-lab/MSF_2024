import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DemoButton from '../../components/DemoButton';

export default function Game() {
    const location = useLocation();
    const [completedPages, setCompletedPages] = useState({});
    const [showEndScreen, setShowEndScreen] = useState(false);
    const totalQuestions = 6;

    useEffect(() => {
        if (location.state && location.state.userData) {
            checkForCompletedPage();
        }
        checkForEndOfGame();
    }, [location]);

    function checkForCompletedPage() {
        const completed = {};
        for (const id of pageIDs) {
            completed[id] = location.state.userData.completedDemos.includes(id);
        }
        console.log(completed);
        setCompletedPages(completed);
    }

    function checkForEndOfGame(){
        const numCompletedDemos= location.state !=null ? location.state.userData.completedDemos.length : 0;
        if(numCompletedDemos == pageIDs.length){
            setShowEndScreen(true);
        }
    }
    const pageIDs = ["/AVADemo", "/HowToResearch", "/SimInfo"];

    return (
        <div>
            {( showEndScreen ? <h1>Congratulations</h1> : <h1>Score</h1>)}
            {( showEndScreen ? <h2>Final Score {location.state!=null ? (location.state.userData.score/totalQuestions * 100).toPrecision(3) : 0}%</h2>: <h2>{location.state!=null ? (location.state.userData.score/totalQuestions * 100).toPrecision(3) : 0}%</h2>)}
            
            {( showEndScreen ? <></>: pageIDs.map((id, index) => (
                <DemoButton
                    key={index}
                    userData={location.state!=null ? location.state.userData : null}
                    pageID={id}
                    buttonText={id === "/AVADemo" ? "AVA Demo" : id === "/HowToResearch" ? "How To Research" : "SIM Info"}
                    code={id === "/AVADemo" ? "15070" : id === "/HowToResearch" ? "68978" : "74343"}
                    isCompleted={completedPages[id] || false}
                />
            )))}

        </div>
    );
}
