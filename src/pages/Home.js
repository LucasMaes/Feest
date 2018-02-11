import React from 'react';
import picture from './../IMG_1272.JPG';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="center-align">
            <header className="App-header">
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
            <div className="section">
              <h5>Tombeek Plage</h5>
              <h6>Lanestraat 126</h6>
              <h6>Overijse</h6>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
