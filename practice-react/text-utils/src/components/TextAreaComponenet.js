import React, { useEffect, useRef } from 'react';

function TextAreaComponent() {
  //declaring 
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    //function
    const handleButtonClick = () => {
      const textarea = textareaRef.current;
      textarea.value = textarea.value.toUpperCase();
    };

    //mounting or adding event listener 
    const button = buttonRef.current;
    button.addEventListener('click', handleButtonClick);

    // Cleanup event listener on component unmount
    return () => {
      button.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <div>
      <textarea ref={textareaRef}></textarea>
      <button ref={buttonRef}>Convert to Uppercase</button>
    </div>
  );
}

export default TextAreaComponent;