import React from "react";
import "./form.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import { API_BASE_URL } from "../config";
import Links from "./links";

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: []
    }
    this._name = React.createRef();
    this._lastName = React.createRef();
  }
  onSubmit = e =>  {
    e.preventDefault();
    console.log(`submit button has been clicked!`);
    const firstName = this._name.current.value;
    const lastName = this._lastName.current.value;
    this.props.dispatch(actions.setName(firstName));
    this.props.dispatch(actions.setLastName(lastName));

    const client = {
      firstName,
      lastName,
      hours: 0
    };

    this.props.dispatch(actions.addClient(client));
    this._name.current.value = "";
    this._lastName.current.value = "";
    this.postRequestPromise();
   
  }

  postRequest = () => {

    const data = {
      firstName: this.props.state.firstName,
      lastName: this.props.state.lastName
    }
  
    fetch(API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  postRequestPromise = () => {

    const wait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    wait.then(this.postRequest);

  }


  render() {
    return (
      <div>
        <Links/>
        <form onSubmit={this.onSubmit}>
          <h1> Register a client </h1>
          <label htmlFor="client-name">Client Name</label>
          <input className="my-text" ref={this._name} required />

          <label htmlFor="client-last-name">Client Last Name</label>
          <input className="my-text" ref={this._lastName} required />

          <button> SUBMIT </button>

          <p>
            {" "}
            This is an app that keeps track of the hours that you have worked
            with your client!
          </p>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Form);
