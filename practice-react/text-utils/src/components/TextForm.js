import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    let [text, setText] = useState('');
    let handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert('the text is converted to Uppercase','primary');
    }
    let handleLowerCaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert('the text is converted to lowercase','primary');
    }
    let handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('the text is cleared','primary');
    }
    let handleOnChange = (event) => {
        setText(event.target.value)
    }
    function countWords(x) {
        let y = x.trim();
        let words = y.split(` `);
        return words.filter(word => word.length > 0).length;
    }
    let handleOnCopy = () => {
        let myBox = document.getElementById('exampleFormControlTextarea1');
        myBox.select()
        navigator.clipboard.writeText(myBox.value)
        props.showAlert('the text is copied','primary');
    }
    let handleOnRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('the text has all extra spaces removed','primary');
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"
                    value={text} onChange={handleOnChange}></textarea>
                {/* rows inc from 3 to 8 */}
                <button className="btn btn-primary my-3" id="uppercaseButton"
                    onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" id="lowercaseButton"
                    onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" id="clearButton"
                    onClick={handleClear}>Clear textarea</button>
                <button className="btn btn-primary my-3 mx-2" id="clearButton"
                    onClick={handleOnCopy}>Copy text</button>
                <button className="btn btn-primary my-3 mx-2" id="clearButton"
                    onClick={handleOnRemoveExtraSpace}>Remove extra spaces</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{countWords(text)} words are present and {text.length} charecters are present</p>
                <p>{0.008 * countWords(text)} Minutes required to read</p>
                {/* <p>{text.split(' ').length} words are present and {text.length} charecters are present</p>
                <p>{0.008*text.split(' ').length} Minutes required to read</p> 
                better than this logic*/}
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: 'Put your heading here'
}
// import React, {useState,useEffect} from 'react'
// import PropTypes from 'prop-types'
// export default function TextForm(props){
//     let [text,setText] = useState('Enter Text Here');
//     let handleUpperCaseClick = () =>{
//         let newText = text.toUpperCase()
//         setText(newText);
//     }
//     let handleOnChange =() => {
//         let x = document.getElementById('exampleFormControlTextarea1');
//         setText(x.value);
//     }
//     useEffect (() =>{
//         let upperCaseButton = document.getElementById('upperCaseButton');
//         upperCaseButton.addEventListener('click',handleUpperCaseClick);
//         return (() => {
//             upperCaseButton.removeEventListener('click',handleUpperCaseClick);
//         })
//     })
//         return (
//             <>
//             <h1>{props.heading}</h1>
//             <div className="mb-3">
//             <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"
//             value={text} onChange={handleOnChange }></textarea>
//             {/* rows inc from 3 to 8 */}
//             <button className="btn btn-primary my-3" id="upperCaseButton">Convert to Uppercase</button>
//             </div>
//             </>
//         )
// }
// TextForm.propTypes = {
//     heading : PropTypes.string
// }
// TextForm.defaultProps = {
//     heading : 'Put your heading here'
// } same result 