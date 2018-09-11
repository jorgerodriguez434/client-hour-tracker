import React from "react";
import { API_BASE_URL } from "../config";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export class SetRemove extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  remove = () => {
    console.log("removing");
    fetch(`${API_BASE_URL}/${this.props.state.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));

    this.setState({
      message: "Client has been removed!",
      display: "removed"
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

  render = () => {
  
    if (this.state.display === "landing") {
      return (
        <div>
            <h1> Remove Client </h1>
          <div>
            <p>
              {" "}
              {this.props.state.firstName} {this.props.state.lastName}{" "}
            </p>
            <p>Hours: {this.props.state.hours} </p>

            <button onClick={this.remove}> CONFIRM </button>
            <button onClick={this.cancel}> CANCEL </button>
            <p> Are you sure you want to remove this client? </p>
          </div>
        </div>
      );
    }

    if (this.state.display === "cancel") {
      return <Redirect to="/clients" />;
    }

    if (this.state.display === "removed") {
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

export default connect(mapStateToProps)(SetRemove);
