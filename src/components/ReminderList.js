import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReminderList extends Component {
  state = {
    reminders: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user[1];

    fetch(`/getRemindersByEmailId/${email}`)
      .then((response) => response.json())
      .then((data) => this.setState({ reminders: data }));
  }

  render() {
    return (
      <div>
        {this.state.reminders.length === 0 ? (
          <h4 className="text-center mt-5  text-success">No reminders..</h4>
        ) : null}

        {this.state.reminders.map((reminder) => {
          return (
            <div key={reminder.eventId} className="m-5 ">
              <Link
                to={{
                  pathname: "/reminder-details",
                  state: { reminder },
                }}
              >
                <h6 className="text-dark"> {reminder.eventName}</h6>
              </Link>

              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReminderList;
