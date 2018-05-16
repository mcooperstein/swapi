import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">StarWars API</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/films">Films</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/characters">Characters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/planets">Planets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/species">Species</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/starships">Starships</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/vehicles">Vehicles</NavLink>
            </li>
          </ul>
      </div>
      </nav>
    </div>
  )
}

export default Navbar;
