import React from 'react';

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist1: '',
      song1: '',
      artist2: '',
      song2: '',
      artist3: '',
      song3: '',
    };

    this.handleChangeArtist1 = this.handleChangeArtist1.bind(this);
    this.handleChangeSong1 = this.handleChangeSong1.bind(this);
    this.handleChangeArtist2 = this.handleChangeArtist2.bind(this);
    this.handleChangeSong2 = this.handleChangeSong2.bind(this);
    this.handleChangeArtist3 = this.handleChangeArtist3.bind(this);
    this.handleChangeSong3 = this.handleChangeSong3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeArtist1(event){
    this.setState({artist1:event.target.value});
  }
  handleChangeSong1(event){
    this.setState({song1:event.target.value});
  }
  handleChangeArtist2(event){
    this.setState({artist2:event.target.value});
  }
  handleChangeSong2(event){
    this.setState({song2:event.target.value});
  }
  handleChangeArtist3(event){
    this.setState({artist3:event.target.value});
  }
  handleChangeSong3(event){
    this.setState({song3:event.target.value});
  }
  handleSubmit(event){
    // data in the form
    var form_data1={
        artist: this.state.artist1,
        song: this.state.song1
    };
    var form_data2={
        artist: this.state.artist2,
        song: this.state.song2
    };
    var form_data3={
        artist: this.state.artist3,
        song: this.state.song3
    };
    // submit form data to api
    window.$.ajax({
        url: "/create.php",
        type : "POST",
        contentType : 'application/json',
        data : JSON.stringify(form_data1),
        success : function(response) {

            // api message
            this.setState({successCreation: response['message']});

            // empty form
            this.setState({artist1: ""});
            this.setState({song1: ""});

        }.bind(this),
        error: function(xhr, resp, text){
            // show error to console
            console.log(xhr, resp, text);
        }
    });
    window.$.ajax({
        url: "/create.php",
        type : "POST",
        contentType : 'application/json',
        data : JSON.stringify(form_data2),
        success : function(response) {

            // api message
            this.setState({successCreation: response['message']});

            // empty form
            this.setState({artist2: ""});
            this.setState({song2: ""});

        }.bind(this),
        error: function(xhr, resp, text){
            // show error to console
            console.log(xhr, resp, text);
        }
    });
    window.$.ajax({
        url: "/create.php",
        type : "POST",
        contentType : 'application/json',
        data : JSON.stringify(form_data3),
        success : function(response) {

            // api message
            this.setState({successCreation: response['message']});

            // empty form
            this.setState({artist3: ""});
            this.setState({song3: ""});

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
          <h3> Music Maestro </h3>
          <p> Na het dessert schudden we de beentjes los op enkele goede beats!
          {"\n"} Lucas is op z’n best met POMPEN van Kraantje Pappie en is nooit te gegeneerd om Fifth Harmony als verzoeknummertje te vragen. Kristien smelt dan weer voor de Kempense charmes van de Van Echelpoel en gaat helemaal uit de bol op elke R&B schijf! </p>
          <p> Graag horen we jullie all time favourites! </p>
          <p> Vul hieronder jullie top 3 in en we doen er alles aan (lees: zware chantage van de DJ) om deze op de playlist te krijgen… In ruil voor jullie volle overgave op de dansvloer ;) </p>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="2Fabiola" id="artist" type="text" value={this.state.artist1} onChange={this.handleChangeArtist1} className="validate"/>
              <label htmlFor="artist" className="active">Artist</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Lift you up" id="song" type="text" value={this.state.song1} onChange={this.handleChangeSong1} className="validate"/>
              <label htmlFor="song" className="active">Song</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Fifth harmony" id="artist" type="text" value={this.state.artist2} onChange={this.handleChangeArtist2} className="validate"/>
              <label htmlFor="artist" className="active">Artist</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Worth it" id="song" type="text" value={this.state.song2} onChange={this.handleChangeSong2} className="validate"/>
              <label htmlFor="song" className="active">Song</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Eurythmics" id="artist" type="text" value={this.state.artist3} onChange={this.handleChangeArtist3} className="validate"/>
              <label htmlFor="artist" className="active">Artist</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Sweet dreams" id="song" type="text" value={this.state.song3} onChange={this.handleChangeSong3} className="validate"/>
              <label htmlFor="song" className="active">Song</label>
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
