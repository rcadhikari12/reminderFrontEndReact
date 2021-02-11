import React, { Component } from "react";
import axios from "axios";

class SetReminder extends Component {
  state = {
    email: "",
    eventName: "",
    eventReminderDate: "",
    eventReminderTime: "",
    errMsg: false,
  };

  handleSubject = (event) => {
    this.setState({ eventName: event.target.value });
  };

  handleDate = (event) => {
    this.setState({ eventReminderDate: event.target.value });
  };

  handleTime = (event) => {
    this.setState({ eventReminderTime: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.eventName === "" ||
      this.state.eventReminderDate === "" ||
      this.state.eventReminderTime === ""
    ) {
      this.setState({ errMsg: true });
    } else {
      axios.post(`/createReminder/${this.state.email}`, {
        eventName: this.state.eventName,
        eventReminderDate: this.state.eventReminderDate,
        eventReminderTime: this.state.eventReminderTime,
      });

      window.location.reload(false);
      document.location.reload();
    }
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({ email: user[1] });
  }

  render() {
    const { subject, date, time, errMsg } = this.state;
    return (
      <div>
        <button
          type="button"
          class="btn btn-warning btn-sm"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add New Reminder
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-info text-white">
                <h5 class="modal-title " id="exampleModalLabel">
                  Remind me of the event...
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label>Event description</label>
                <br />
                <textarea
                  rows="2"
                  cols="40"
                  value={subject}
                  onChange={this.handleSubject}
                />
                <br />
                <br />

                <label>Reminder Date </label>
                <br />

                <input type="date" value={date} onChange={this.handleDate} />

                <br />
                <br />

                <label>Reminder Time </label>
                <br />

                <input type="time" value={time} onChange={this.handleTime} />

                {errMsg ? (
                  <p className="text-danger">One or more Empty fields... </p>
                ) : null}
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SetReminder;
