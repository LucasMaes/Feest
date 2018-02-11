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


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <div>
              <div>
                <Sidenav/>
              </div>
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
