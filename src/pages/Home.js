import React from 'react';
import picture from './../IMG_1272.JPG';
import {Link} from 'react-router-dom';
import Sidenav from './Sidenav';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="center-align">
            <header className="App-header ">
              <img src={picture} className="App-logo" alt="kristienenlucas" height="300"/>
              <h1 className="App-title">Kristien en Lucas</h1>
            </header>
          </div>
        </div>
        <div className="center-align">
          <main>
            <div className="section row">
              <h4 className="App-intro">
                19 mei 2017
              </h4>
            </div>
          </main>
          <footer className="page-footer">
            <div className="section row">
              <p>Tombeek Plage</p>
              <p>Lanestraat 126</p>
              <p>Overijse</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
