import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vemiLogo from "../assets/VEMI-Logo-2020-1024x430.png";
import another from "../assets/logo.svg";
import Modal from "react-modal";

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
        padding: '10px',
        textAlign: 'center',
    },
    
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
export default function DemoButton( { pageID, buttonText, code, isCompleted}) {    
    let subtitle;
    const navigate = useNavigate();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [codeEntered, setCodeEntered] = useState("");
  
    const errorText = {
        visibility: isVisible ? 'hiden' : 'visible',
        color: 'red',
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
            toggleVisibility(true);
            // navigate to the next page
            navigate(pageID);
        } else {
            toggleVisibility(false);
            console.log("Code is incorrect");
        }
    }

    return (
        <div>
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
                
                <h3 style={errorText}>incorrect</h3>
                <form onSubmit={handleSubmit}>
                    <input inputMode="text" value={codeEntered} onChange={(e) => setCodeEntered(e.target.value)} />
                    <input type="submit" />
                </form>
                {/* <button onClick={closeModal}>close</button> */}
                
            </Modal>
        </div>
    </div>
    );
}
