import React from 'react';
import Sidenav from './Sidenav';
import Camping from './../camping.png';

export default class Nighttime extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="center-align">
          <header className="App-header ">
            <img src={Camping} className="App-logo" alt="camping" height="300"/>
          </header>
        </div>
        <main className="container">
          <h3> Night Time </h3>
          <p> Na het avondfeest kan wie wil, samen met ons, gezellig zijn tent opslaan op het domein en daar overnachten. Je staat dan wel in voor je eigen kampeermateriaal natuurlijk. Toiletten zijn beschikbaar, een buitendouche ook (zonder warm water weliswaar, dus dat is voor de waaghalzen onder ons). </p>
          <p> Drukken jullie op de knop hiernaast indien jullie dit willen en vullen jullie de gevraagde gegevens in? </p>
          <p> Voor wie het liever wat minder avontuurlijk heeft zijn er nog tal van andere overnachtingsmogelijkheden die, voor ieders gemak, zelf te regelen zijn: </p>
          <ul className="browser-default">
            <li> PARK 7: iets verder weg maar schitterend gelegen in een familiale sfeer – dit is voor de ‘luxepoezen’ onder ons ;) </li>
            <li> HOTEL PANORAMA: ruim hotel maar minder charmant </li>
            <li> HOTEL SORET: ruim hotel met véél faciliteiten maar iets verder en snel volboekt </li>
            <li> BEST WESTERN WAVRE: vlakbij maar minder persoonlijk </li>
            <li> B&B BARONS HOUSE: iets verder weg maar mooie ligging – luxueus! </li>
            <li> B&B HIPPO-DROOM: iets verder weg maar mooie ligging – luxueus </li>
            <li> DU COTE DE CHEZ LOU: dichtbij en een ‘whopping’ 8.3 op booking.com </li>
            <li> HOTEL AVALON: op kruipafstand maar mogelijk eerder per uur te betalen dan per nacht </li>
            <li> Check Booking.com voor meer inspiratie... </li>
          </ul>
        </main>
      </div>
    );
  }
}
