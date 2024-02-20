import React from 'react';
import DemoButton from '../../components/DemoButton';

export default function Home() {    

    function startExperience(){
        console.log("Show Demo");
        // navigate to the next page
    }
    return (
        <div>
            <h1>Score</h1>
            <h2>0</h2>
            
            <DemoButton linkToPage="/AVADemo" buttonText="AVA Demo" code="DIEKAIOE" />
            <button>DEMO 2</button>
            <button>DEMO 3</button>
        </div>
    );
}
