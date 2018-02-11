import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Why from './pages/Why';
import Home from './pages/Home';
import Whenwhere from './pages/Whenwhere';
import Practicalities from './pages/Practicalities';
import Music from './pages/Music';
import Nighttime from './pages/Nighttime';
import Gifts from './pages/Gifts';
import Sidenav from './pages/Sidenav';
import Banner from './banner.jpg';


class App extends Component {
  componentDidMount(){
    window.$('.button-collapse').sideNav();
  }
  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <div className="container">
              <div className="center-align hide-on-med-and-down">
                <img src={Banner}  alt="kristienenlucasbanner" width="100%"/>
              </div>
              <nav>
                <div className="nav-wrapper teal darken-2">
                  <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                  <ul id="nav-mobile" className="hide-on-med-and-down">
                    <li><Link to="/" className="white-text">Kristien & Lucas</Link></li>
                    <li><Link to="/Why" className="white-text">Why</Link></li>
                    <li><Link to="/Whenwhere" className="white-text">When & Where</Link></li>
                    <li><Link to="/Practicalities" className="white-text"> Practicalities & fun facts </Link> </li>
                    <li><Link to="/Music" className="white-text">Music Maestro</Link></li>
                    <li><Link to="/Nighttime" className="white-text">Night Time</Link></li>
                    <li><Link to="/Gifts" className="white-text">Gifts</Link></li>
                  </ul>
                  <ul class="side-nav" id="mobile-demo">
                    <li><Link to="/">Kristien & Lucas</Link></li>
                    <li><Link to="/Why">Why</Link></li>
                    <li><Link to="/Whenwhere">When & Where</Link></li>
                    <li><Link to="/Practicalities"> Practicalities & fun facts </Link> </li>
                    <li><Link to="/Music">Music Maestro</Link></li>
                    <li><Link to="/Nighttime">Night Time</Link></li>
                    <li><Link to="/Gifts">Gifts</Link></li>
                  </ul>
                </div>
              </nav>
              <Route exact path="/" component={Home}/>
              <Route path="/why" component={Why}/>
              <Route path="/whenwhere" component={Whenwhere}/>
              <Route path="/practicalities" component={Practicalities}/>
              <Route path="/music" component={Music}/>
              <Route path="/nighttime" component={Nighttime}/>
              <Route path="/gifts" component={Gifts}/>
            </div>
         </Router>
        </div>
      </div>
    );
  }
}

export default App;
