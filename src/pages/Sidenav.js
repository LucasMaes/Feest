import React from 'react';
import {Link} from 'react-router-dom';

export default class Sidenav extends React.Component {
  componentDidMount(){
    window.$('.button-collapse').sideNav();
    //$('.button-collapse').sideNav();
    //alert("hello");
  }
  render() {
    return (
      <div className="left-align">
        <ul id="slide-out" className="side-nav fixed center-align teal darken-2">
          <li><Link to="/" className="white-text">Kristien & Lucas</Link></li>
          <li><Link to="/Why" className="white-text">Why</Link></li>
          <li><Link to="/Whenwhere" className="white-text">When & Where</Link></li>
          <li><Link to="/Practicalities" className="white-text"> Practicalities & fun facts </Link> </li>
          <li><Link to="/Music" className="white-text">Music Maestro</Link></li>
          <li><Link to="/Nighttime" className="white-text">Night Time</Link></li>
          <li><Link to="/Gifts" className="white-text">Gifts</Link></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    );
  }
}
