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
    this.props.dispatch(actions.setCase(caseName, caseDescription));
    this._caseName.current.value = "";
    this._caseDescription.current.value = ""; 
    this.postRequestPromise();
  };

  
  postRequest = () => {
    console.log("Post Request");
    console.log(this.props.state);
    const firstName = this.props.state.firstName.toLowerCase();
    const lastName = this.props.state.lastName.toLowerCase();
    const data = {
      firstName,
      lastName,
      case: {
          description: this.props.state.case.description,
          name: this.props.state.case.name
      }
    };

    fetch(API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
        //Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", response);
      })
      .then( () => {
              this.setState({
                display: "clients"
              });
      });
  };

  postRequestPromise = () => {
    const wait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    wait
    .then(this.postRequest);
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

    if (this.state.display === "home") {
      return <Redirect to="/" />;
    }
  }; //render
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(AddCase);
