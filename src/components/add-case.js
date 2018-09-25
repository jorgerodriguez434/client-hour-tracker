import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { API_BASE_URL } from "../config";
import { Redirect } from "react-router-dom";

export class AddCase extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
    this._caseName = React.createRef();
    this._caseDescription = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(`submit button has been clicked!`);
    const caseName = this._caseName.current.value;
    const caseDescription = this._caseDescription.current.value;
    this.props.dispatch(actions.setCaseName(caseName));
    this.props.dispatch(actions.setCaseDescription(caseDescription));

    this._caseName.current.value = "";
    this._caseDescription.current.value = "";
    this.props.dispatch(actions.addClient(this.state.client));
    this.updateRequestPromise();
  };

  updateRequest = () => {
    console.log("updating");
    const data = {
      firstName: this.props.state.firstName,
      lastName: this.props.state.lastName,
      hours: this.props.state.hours,
      case: {
        name: this.props.state.caseName,
        description: this.props.state.caseDescription,
        hours: 0
      }
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
  };

  updateRequestPromise = () => {
    const wait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    wait
    .then(this.updateRequest)
    .then(() => {
      this.setState({
        display: "clients"
      });
    });
  };

  componentDidMount = () => {
    console.log(this.props.state.clients);
  };

  render = () => {
    
    if (this.state.display === "landing") {
      return (
        <div>
          <h1> Add a case! </h1>
          <p>
            {" "}
            {this.props.state.firstName} {this.props.state.lastName}{" "}
          </p>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="case-name">Case Name</label>
            <input className="my-text" ref={this._caseName} required />

            <label htmlFor="message">Case</label>
            <textarea
              name="message"
              rows="10"
              cols="30"
              className="text-area"
              ref={this._caseDescription}
              required
            />
            <button type="submit"> SUBMIT </button>
          </form>
        </div>
      );
    }

    if (this.state.display === "clients") {
      return <Redirect to="/clients" />;
    }
  }; //render
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(AddCase);
