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
import LoginForm from './pages/loginForm';


class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      login: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount(){
    window.$('.button-collapse').sideNav({
        menuWidth: 250,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      }
    );
  }

  handleLogin(event){
    this.setState({login:true});
  }

  render() {
    if (this.state.login){
      return (
        <div>
          <div className="App">
            <Router>
              <div className="container">
                <div className="center-align hide-on-med-and-down">
                  <img src={Banner}  alt="kristienenlucasbanner" width="100%"/>
                </div>
                <nav className="nav-center">
                  <div className="nav-wrapper teal darken-2">
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                      <li><Link to="/" className="white-text">Kristien & Lucas</Link></li>
                      <li><Link to="/Why" className="white-text">Waarom feesten?</Link></li>
                      <li><Link to="/Whenwhere" className="white-text">Waar & wanneer?</Link></li>
                      <li><Link to="/Practicalities" className="white-text"> Tips & tricks </Link> </li>
                      <li><Link to="/Music" className="white-text">Music Maestro</Link></li>
                      <li><Link to="/Nighttime" className="white-text">Slaaptijd</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                      <li><Link to="/">Kristien & Lucas</Link></li>
                      <li><Link to="/Why">Waarom feesten?</Link></li>
                      <li><Link to="/Whenwhere">Waar & wanneer?</Link></li>
                      <li><Link to="/Practicalities"> Tips & tricks  </Link> </li>
                      <li><Link to="/Music">Music Maestro</Link></li>
                      <li><Link to="/Nighttime">Slaaptijd</Link></li>
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
    else {
      return <div className="section"><LoginForm login = {this.handleLogin}/></div>;
    }
  }
}

export default App;
