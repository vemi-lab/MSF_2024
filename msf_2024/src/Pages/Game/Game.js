// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import DemoButton from '../../components/DemoButton';

// export default function Game( { props }) {    
//     const location = useLocation();
//     console.log(location);
//     function startExperience(){
//         console.log("Show Demo");
//         // navigate to the next page
//     }
//     const pageIDs = ["/AVADemo","/HowToResearch","/SimInfo"];

//     function checkForCompletedPage(){
//         for (id in location.state.pageID){
//             if (pageIDs.includes(id)){
//                 // Set page to completed

//             } else {
//                 // Set page to uncomplete
//             }
//         }
//     }
//     return (
//         <div>
//             <h1>Score</h1>
//             <h2>{location.state.score ? location.state.score : 0}</h2>
//             <DemoButton pageID={pageIDs[0]} buttonText="AVA Demo" code="15070" isCompleted={false}/>
//             <DemoButton pageID={pageIDs[1]} buttonText="How To Research" code="68978" isCompleted={true}/>
//             <DemoButton pageID={pageIDs[2]} buttonText="SIM Info" code="74343" isCompleted={true}/>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DemoButton from '../../components/DemoButton';

export default function Game() {    
    const location = useLocation();
    const [completedPages, setCompletedPages] = useState({});
    // const [score, setScore] = useState(0);

    useEffect(() => {
        if (location.state && location.state.userData) {
            checkForCompletedPage();
        }
    }, [location]);

    function checkForCompletedPage() {
        const completed = {};
        for (const id of pageIDs) {
            completed[id] = location.state.userData.completedDemos.includes(id);
        }
        console.log(completed);
        setCompletedPages(completed);
    }

    const pageIDs = ["/AVADemo", "/HowToResearch", "/SimInfo"];

    return (
        <div>
            <h1>Score</h1>
            <h2>{location.state!=null ? location.state.userData.score : 0}</h2>
            {pageIDs.map((id, index) => (
                <DemoButton
                    key={index}
                    userData={location.state!=null ? location.state.userData : null}
                    pageID={id}
                    buttonText={id === "/AVADemo" ? "AVA Demo" : id === "/HowToResearch" ? "How To Research" : "SIM Info"}
                    code={id === "/AVADemo" ? "15070" : id === "/HowToResearch" ? "68978" : "74343"}
                    isCompleted={completedPages[id] || false}
                />
            ))}
        </div>
    );
}
