import React from 'react';
import { Link } from 'react-router-dom';

export default function AVADemo() {    
    
    return (
        <div>
            <h1>AVA Demo Page!</h1>
            <img src="" alt="Duck chase logo or something?" />
            <Link to="/game">Back To Home</Link>
        </div>
    );
}