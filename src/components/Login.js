import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

class Login extends Component {
  state = {};

  responseGoogle = (response) => {
    this.props.history.push("/home");

    let user = [];
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const imageUrl = response.profileObj.imageUrl;

    if (!JSON.parse(localStorage.getItem("user"))) {
      user.push(name, email, imageUrl);
      localStorage.setItem("user", JSON.stringify(user));
    }

    axios.post(`/register`, {
      email: email,
    });
  };

  render() {
    return (
      <div className="login-form">
        '<h2>Reminder App Login</h2>
        <br />
        <div className="google-button">
          <GoogleLogin
            clientId="262137225765-cakq2g81i7m40skr6ua6n43v2jqj2onp.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}

export default Login;
