import React from "react";
import { API_BASE_URL } from "../config";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

export class SetUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }


  onSubmit = e => {
    e.preventDefault();
    console.log(`submit button has been clicked!`);
    setTimeout(this.update, 2000);
  }

  update = () => {
    console.log("updating");
    const data = {
        firstName: this.props.state.firstName,
         lastName: this.props.state.lastName,
         hours: this.props.state.hours
      };
    fetch(`${API_BASE_URL}/${this.props.state.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));

    this.setState({
      message: "Client has been updated!",
      display: "updated"
    });

    setTimeout(() => {
      this.setState({
        message: null,
        display: "cancel"
      });
    }, 1500);
  };

  cancel = () => {
    this.setState({
      display: "cancel"
    });
  };

  handleFirstNameChange = e => {
      this.props.dispatch(actions.setName(e.target.value))
  }

  handleLastNameChange = e => {
    this.props.dispatch(actions.setLastName(e.target.value));
}

handleHoursChange = e => {
    this.props.dispatch(actions.setHours(e.target.value));
}
  render = () => {
    console.log(this.props.state);
    if (this.state.display === "landing") {
      return (
        <div>
          <h1> Update Client </h1>
          <div>
            <p>
              {" "}
              {this.props.state.firstName} {this.props.state.lastName}{" "}
            </p>
            <p>Hours: {this.props.state.hours} </p>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="client-name">Client Name</label>
              <input className="my-text" ref={this._name} value={this.props.state.firstName}  onChange={this.handleFirstNameChange} required />

              <label htmlFor="client-last-name">Client Last Name</label>
              <input className="my-text" ref={this._lastName} value={this.props.state.lastName}  onChange={this.handleLastNameChange} required />

              <label htmlFor="hours">Hours</label>
              <input className="my-text" ref={this._hours} value={this.props.state.hours}  onChange={this.handleHoursChange} required />

                <button type="submit"> CONFIRM </button>
            <button onClick={this.cancel}> CANCEL </button>
            </form>
          
          </div>
        </div>
      );
    }

    if (this.state.display === "cancel") {
      return <Redirect to="/clients" />;
    }

    if (this.state.display === "updated") {
      return (
        <div>
          <p> {this.state.message}</p>
        </div>
      );
    }
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(SetUpdate);
