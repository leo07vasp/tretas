import React, { useEffect, useCallback /*,useState */ } from 'react';


const Modal = ({onAdd, line, nameVoting, closeModal}) => {

    const closeInShadown = () => {
        closeModal(false)
    }

    const escFunction = (event) => {
        if (event.key === "Escape") {
          closeModal(false)
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, []);
    

    return (
        <>
        <div onClick={closeInShadown} className="shadow"></div>    
        <div className="position-absolute" id="modal">
        <h2>Emoji para : {nameVoting} </h2>
        <p>
            <span className="emojiSelect" onClick={() => onAdd(line, '😁')} >😁</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '❤️')} >❤️</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '🐍')} >🐍</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '💣')} >💣</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '💔')} >💔</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '🌱')} >🌱</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '🍌')} >🍌</span>
            <span className="emojiSelect" onClick={() => onAdd(line, '🙁')} >🙁</span>
            
        </p>
        </div>
        </>
    )
}

export default Modal