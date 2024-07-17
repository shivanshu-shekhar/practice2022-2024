import React, { useEffect, useRef,useState } from 'react';
export default function Clicker(){
  let [para,setPara] = useState(0);
  //since p tag dont have value attribute
  let buttonRef = useRef(null);
  //declaration
  useEffect(() =>{
    //useEffect start
    let handleClick = () => {
      setPara(para+1);
    }
    //function
    let btn = buttonRef.current;
    btn.addEventListener('click',handleClick);
    //mounting
    return() => {
      btn.removeEventListener('click',handleClick);
    }
    //unmounting
  },[para])
  //to re render for one state to render once use [] 
  return(
    <div>
      <h2>Clicker</h2>
      <p >{para}</p>
      <button ref={buttonRef}>click me</button>
      {/* refering the button */}
    </div>
  )
}