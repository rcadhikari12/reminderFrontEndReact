import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DeleteReminder from "./DeleteReminder";

class RemainderDetails extends Component {
  state = {};

  render() {
    const { reminder } = this.props.location.state;

    if (!localStorage.getItem("user")) {
      return <Redirect to="/" />;
    }

    return (
      <div className="reminder-details ">
        <div>
          <h2 className="jumbotron mt-5 text-center bg-info text-white">
            Reminder Details
            <input
              type="submit"
              value="Go Back"
              className="btn btn-success float-right"
              onClick={() => this.props.history.push("/home")}
            />
          </h2>
        </div>
        <div className="box-details bg-info text-white">
          <hr />
          <h3 className="bg-dark text">{reminder.eventName}</h3>
          <br />

          <h6>Reminder Date: {reminder.eventReminderDate}</h6>
          <br />
          <h6>Reminder Time: {reminder.eventReminderTime}</h6>

          <br />
          <DeleteReminder reminderId={reminder.reminderId} />
        </div>
      </div>
    );
  }
}

export default RemainderDetails;
