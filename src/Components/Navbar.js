
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
   
    return(
      <nav className={`navbar navbar-expand-lg ${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">{props.about}</Link>
      </li>
    </ul>
<div className={` form-check form text-switch-${props.mode==='light'?'dark':'light'}`}>
<input type="checkbox" className=" form-check-input" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">switch</label>
</div>
  </div>
</nav>
    );
}
Navbar.defaultProps={
     
    about:"About"
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

 