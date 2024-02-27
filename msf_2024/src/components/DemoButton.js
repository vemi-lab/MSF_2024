import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vemiLogo from "../assets/VEMI-Logo-2020-1024x430.png";
import another from "../assets/logo.svg";
import Modal from "react-modal";
import "./DemoButton.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
    },
    header: {
        borderRadius: '10px 10px 0 0',
        // padding: '10px',
        textAlign: 'center',
    },
    
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
export default function DemoButton( { pageID, buttonText, code, isCompleted, userData}) {    
    let subtitle;
    const navigate = useNavigate();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [codeEntered, setCodeEntered] = useState("");
    const [shakeError, setShakeError] = useState(false);
  
    const errorText = {
        color: 'red',
        margin: '1px',
        textAlign: 'center',
    }
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style = ;
    }

    function closeModal() {
    setIsOpen(false);
    }
    const toggleVisibility = (toggle) => {
        setIsVisible(toggle);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(codeEntered === code){
            console.log("Code is correct");
            console.log("Page ID: " + pageID)
            toggleVisibility(false);
            // navigate to the next page
            navigate(pageID, {state: {pageID, userData}});
        } else {
            toggleVisibility(true);
            setShakeError(true); // Trigger shake animation on incorrect code entry
            setTimeout(() => {
                setShakeError(false); // Reset shake animation after a short delay
            }, 1000);
            console.log("Code is incorrect");
        }
    }

    return (
        <div>
           { isCompleted ? 
           <div>
                <img src={isCompleted ? vemiLogo : another} alt="VEMI Logo" />
                <h2>{buttonText}</h2>
            </div>
            :
            <div>
                <button onClick={openModal}>
                    <div>
                        <img src={isCompleted ? vemiLogo : another} alt="VEMI Logo" />
                        <h2>{buttonText}</h2>
                    </div>
                </button>
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                    
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={customStyles.header}>Enter Code</h2>

                <form onSubmit={handleSubmit} className="submitForm">
                    <input inputMode="text" className="codeInput" value={codeEntered} onChange={(e) => setCodeEntered(e.target.value)} />
                    <br/>
                    <input type="submit"/>
                </form>
                {isVisible ? 
                <div>
                    <h3 className={shakeError ? "shake" : ""} style={errorText}>Incorrect</h3>
                    <h3 className={shakeError ? "shake" : ""} style={errorText}>Try Again</h3> 
                </div>
                : <div></div>}
            </Modal>
        </div>
        }
    </div>
    );
}