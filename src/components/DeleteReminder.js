import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class DeleteReminder extends Component {
  state = {
    redirect: false,
  };

  handleClick = () => {
    axios.delete(
      `http://localhost:8080/deleteReminder/${this.props.reminderId}`,
      {}
    );
    window.alert("Reminder deleted successfully...");
    this.setState({ redirect: !this.state.redirect });
  };
  render() {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <input
          type="submit"
          value="Delete Reminder"
          onClick={this.handleClick}
          className="btn btn-danger"
        />
      </div>
    );
  }
}

export default DeleteReminder;
