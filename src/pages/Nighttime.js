import React from 'react';

export default class Nighttime extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      person: '',
      isHidden: true,
    };
    this.handleChangePerson = this.handleChangePerson.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  handleChangePerson(event){
    this.setState({person:event.target.value});
  }
  handleSubmit(event){
    // data in the form
    var form_data={
        user: this.state.person
    };
    // submit form data to api
    window.$.ajax({
        url: "http://localhost/Feest-backend/createtent.php",
        type : "POST",
        contentType : 'application/json',
        data : JSON.stringify(form_data),
        success : function(response) {

            // api message
            this.setState({successCreation: response['message']});

            // empty form
            this.setState({person: ""});
            window.Materialize.toast('Joepie! Jullie komen met de tent', 3000)
            this.setState({isHidden: true});

        }.bind(this),
        error: function(xhr, resp, text){
            // show error to console
            console.log(xhr, resp, text);
        }
    });

    event.preventDefault();
}

  render() {
    return (
      <div className="row">
        <main className="col s12">
          <h3> Slaaptijd </h3>
          <p> Na het avondfeest kan, wie wil, samen met ons, gezellig zijn tent opslaan op het domein en daar overnachten. Je staat dan wel in voor je eigen kampeermateriaal natuurlijk. Toiletten zijn beschikbaar, een buitendouche ook (zonder warm water weliswaar, dus dat is voor de waaghalzen onder ons). </p>
          <p> Drukken jullie op de knop hiernaast indien jullie dit willen en vullen jullie de gevraagde gegevens in? </p>
          <div>
            <a className="waves-effect waves-light btn" onClick={this.toggleHidden.bind(this)}>Wij komen met de tent!</a>
            {!this.state.isHidden && <Child handleChangePerson = {this.handleChangePerson} handleSubmit = {this.handleSubmit}/>}
          </div>
          <p> Voor wie graag dichtbij overnacht, en het wat minder avontuurlijk wenst, zijn er nog tal van andere overnachtingsmogelijkheden: </p>
          <ul className="browser-default">
            <li> PARK 7: iets verder weg maar schitterend gelegen in een familiale sfeer – dit is voor de ‘luxepoezen’ onder ons <i className="tiny material-icons">sentiment_very_satisfied</i> </li>
            <li> HOTEL PANORAMA: ruim hotel maar minder charmant </li>
            <li> HOTEL SORET: ruim hotel met véél faciliteiten maar iets verder en snel volboekt </li>
            <li> BEST WESTERN WAVRE: vlakbij maar minder persoonlijk </li>
            <li> B&B BARONS HOUSE: iets verder weg maar mooie ligging – luxueus! </li>
            <li> B&B HIPPO-DROOM: iets verder weg maar mooie ligging – luxueus! </li>
            <li> DU COTE DE CHEZ LOU: dichtbij en een ‘whopping’ 8.3 op booking.com </li>
            <li> HOTEL AVALON: op kruipafstand maar mogelijk eerder per uur te betalen dan per nacht </li>
            <li> Check Booking.com voor meer inspiratie... </li>
          </ul>
        </main>
      </div>
    );
  }

}
class Child extends React.Component {
  render(){
  return (
  <div>
    <main className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Jullie namen" id="tent" type="text" value={this.props.person} onChange={this.props.handleChangePerson}className="validate"/>
        </div>
      </div>
      <div className="row">
        <button className="btn waves-effect waves-light" type="submit" onClick={this.props.handleSubmit} name="action">Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    </main>
  </div>
  )
  }
}
