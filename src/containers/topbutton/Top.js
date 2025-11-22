import React, { useEffect, useState, useRef } from "react";
import "./Top.css";


export default function Top() {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    // When the user scrolls down 20px from the top of the document, show the button   
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        // Set up scroll listener
        window.addEventListener('scroll', scrollFunction);
        // Check initial state
        scrollFunction();
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    // When the user clicks on the button, scroll to the top of the document
    return (
        <button 
            ref={buttonRef}
            onClick={TopEvent} 
            id="topButton" 
            title="Go to top"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        >
            <i className="fas fa-hand-point-up" aria-hidden="true"></i>
        </button>
    );
}
