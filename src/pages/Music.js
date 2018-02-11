import React from 'react';
import Sidenav from './Sidenav';
import MusicPhoto from './../music.jpg';

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      song: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({artist:event.target.value});
  }
  handleSubmit(event){
    alert('A artist was submitted: ' + this.state.artist);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="center-align">
          <header className="App-header ">
            <img src={MusicPhoto} className="App-logo" alt="music" height="300"/>
          </header>
        </div>
        <main className="container">
          <h3> Music Maestro </h3>
          <p> Na het dessert schudden we de beentjes los op enkele goede beats!
          {"\n"} Lucas is op z’n best met POMPEN van Kraantej Pappie en is nooit te gegeneerd op Fifth Harmony als verzoeknummertje te vragen. Kristien smelt dan weer voor de Kempense charmes van de Van Echelpoel en gaat helemaal uit de bol op elke R&B schijf! </p>
          <p> Graag horen we jullie all time favourites! </p>
          <p> Vul hieronder jullie top 3 in en we doen er alles aan (lees: zware chantage van de DJ) om deze op de playlist te krijgen… In ruil voor jullie volle overgave op de dansvloer ;) </p>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="2Fabiola" id="artist" type="text" value={this.state.artist} onChange={this.handleChange} className="validate"/>
              <label htmlFor="artist">Artist</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Lift you up" id="song" type="text" value={this.state.song} className="validate"/>
              <label htmlFor="song">Song</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>Submit
            <i className="material-icons right">send</i>
          </button>
        </main>
      </div>
    );
  }
}
