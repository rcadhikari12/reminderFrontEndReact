import React, { Component } from "react";
import "../App.css";
import SetReminder from "../components/SetReminder";
import ReminderList from "../components/ReminderList";
import Logout from "./Logout";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    user: [],
  };

  getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({ user });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    if (!localStorage.getItem("user")) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="jumbotron bg-info text-white">
          <h1 class="display-6 text-center ">Remind Me</h1>
          <div className="float-right">
            {" "}
            <Logout />
          </div>
          <img src={this.state.user[2]} alt=" user profile " />
          <p>{this.state.user[0]}</p>
        </div>
        <br />
        <center>
          <h2 className="text-primary">{new Date().toString().slice(0, 15)}</h2>
        </center>

        <br />
        <div className="reminder-buttton">
          <SetReminder />
        </div>

        <h1 className="m-5">Events</h1>

        <ReminderList />

        <div className="footer"></div>
      </div>
    );
  }
}

export default Home;
