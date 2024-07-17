// import logo from './logo.svg';
import Navbar from './components/Navbar'; 
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';                
import Alert from './components/Alert';
//import Contexter from './components/Contexter';
//import Clicker from './components/Clicker';
//import TextAreaComponent from './components/TextAreaComponenet';
// import About from './components/About';
// let name = 'Shivanshu';
function App() {
  let [mode,setMode] = useState('light');
  let [alert,setalert] = useState(null);
  let showAlert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setalert(null);
    },2000)
  }
  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#212529';
      document.body.style.color = 'white';
      document.title = 'TextUtils-Dark mode';
      showAlert('dark mode enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
      document.title = 'TextUtils-Light mode';
      showAlert('light mode enabled','warning');
    }
  }
  return (
    //use of <></> jsx fragmentation
    //use html to jsx using website 'https://transform.tools/html-to-jsx' for changing bootstrap code 
    //and using href = '/'
    <>
      {/* <Navbar/> uncomment and comment the below one to see use of default props*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* my-3 margin y 3 in bootstrap */}
        {/* <TextAreaComponent/>*/}
        {/* useRef and useEffect use */}
        <Alert alert={alert}/>
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert}/>
        {/* <About/> */}
        {/* <Clicker/> */}
        {/* use of useState,useEffect and useRef */}
        {/* <Contexter/> */}
        {/* use of useContext */}
      </div>
    </>
     );
    }
    
    export default App;
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Shivanshu
    //     </a>
    //   </header>
    // </div>
    // <div className="blank">
    //   Lovely
    // </div>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//     <a className="navbar-brand" href="/">TEXTUTILS</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">About</a>
//         </li>
//         {/* video end 5  */}
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// <div class="mb-3">
//   <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// </div>
//     {/* <h1>This is {name}</h1>
//     {/* use of js in jsx  */}
//     {/* <nav>
//       <li>Home</li>
//       <li>Contact</li>
//       <li>About</li>
//     </nav>
//     <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsa,
//        tempora sapiente quam, nisi dolor architecto ratione, aut temporibus vel voluptate.
//        Aperiam illum adipisci similique. Porro deserunt suscipit laborum molestiae?
//        </div> */}
 
