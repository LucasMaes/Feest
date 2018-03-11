import React from 'react';
import {Link} from 'react-router-dom';
import ErrorContainer from '../utils/errorContainer';
import sha256 from 'sha.js'

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        password: "",
        enabled: true, // Indicates if the form is enabled
        errorMessage: null
    }
    this.submit = this.submit.bind(this);

  }
  submit() {
    this.setState({enabled: false, errorMessage: null}); // Disable the form and clear the error message
    if ( this.state.password === sha256('sha256').update(this.state.userName + "kl").digest('hex')){
      this.props.login();
      this.props.username(this.state.userName);
    }
    else{
      this.setState({enabled: true, errorMessage: "The user name and password do not match."});
    }
  }
  render() {
      let submitDisabled = (!this.state.enabled || this.state.userName.length === 0 || this.state.password.length === 0);
              return  <div className="row">
                          <form className="col s12">
                              {this.state.errorMessage && <div className="row"><div className="col s12">
                                      <ErrorContainer message={this.state.errorMessage} />
                                  </div></div>}
                              <div className="row">
                                  <div className="input-field col s12">
                                      <i className="material-icons prefix">account_circle</i>
                                      <input id="login_user_name" type="text" className="validate" value={this.state.userName} onChange={(evt) => this.setState({userName: evt.target.value})} />
                                      <label htmlFor="login_user_name">User Name</label>
                                  </div>
                                  <div className="input-field col s12">
                                      <i className="material-icons prefix">lock</i>
                                      <input id="login_password" type="password"  value={this.state.password} onChange={(evt) => this.setState({password: evt.target.value})} />
                                      <label htmlFor="login_password">Password</label>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col s12 center-align">
                                      <a className={"waves-effect waves-light btn " + (submitDisabled ? "disabled" : "")} onClick={() => this.submit()}><i className="material-icons left">send</i>Aanmelden</a>
                                  </div>
                              </div>
                          </form>
                      </div>;
  }
}
