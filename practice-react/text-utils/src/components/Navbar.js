import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">TEXTUTILS</a> */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        {/* video end 5  */}
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode}
        role="switch"id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.mode === 'light'?'Enable dark mode':'Disable dark Mode'}</label>
      </div>
    </div>
  </div>
</nav>
    {/* <h1>This is {name}</h1>
    {/* use of js in jsx  */}
    {/* <nav>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </nav>
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsa,
       tempora sapiente quam, nisi dolor architecto ratione, aut temporibus vel voluptate.
       Aperiam illum adipisci similique. Porro deserunt suscipit laborum molestiae?
       </div> */}
    </>
  )
}
Navbar.propTypes = {
  title : PropTypes.string
  //title : PropTypes.string.isRequired for throwing error if nothing comes as props solved 
  //by .defaultProps if its removed we see the error
}
//used to throw an error if the prop is not string
Navbar.defaultProps = {
  title : 'Put your title here'
}
//if nothing is passed this default value is shown