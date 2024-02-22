import React from 'react';
import DemoButton from '../../components/DemoButton';

export default function Game( { score }) {    

    function startExperience(){
        console.log("Show Demo");
        // navigate to the next page
    }
    return (
        <div>
            <h1>Score</h1>
            <h2>{score ? score : 0}</h2>
            <DemoButton pageID="/AVADemo" buttonText="AVA Demo" code="15070" isCompleted={false}/>
            <DemoButton pageID="/HowToResearch" buttonText="How To Research" code="68978" isCompleted={true}/>
            <DemoButton pageID="/SimInfo" buttonText="AVA Demo" code="74343" isCompleted={true}/>
        </div>
    );
}
