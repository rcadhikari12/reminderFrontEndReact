import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

class Logout extends Component {
  state = {};

  handleLogout = () => {
    localStorage.removeItem("user");
    document.location.reload();
  };

  render() {
    return (
      <div>
        <GoogleLogout
          clientId="262137225765-cakq2g81i7m40skr6ua6n43v2jqj2onp.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.handleLogout}
          icon={false}
        ></GoogleLogout>
      </div>
    );
  }
}

export default Logout;
