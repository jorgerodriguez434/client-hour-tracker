import React from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../actions";
import { connect } from "react-redux";

export class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      display: "landing"
    };
  }

  setRemove = () => {
    this.setState({
      display: "set remove"
    });
    this.props.dispatch(actions.setId(this.props.clientId));
    this.props.dispatch(actions.setName(this.props.firstName));
    this.props.dispatch(actions.setLastName(this.props.lastName));
    this.props.dispatch(actions.setHours(this.props.hours));
  };

  setUpdate = () => {
    this.setState({
      display: "set update"
    });
    this.props.dispatch(actions.setId(this.props.clientId));
    this.props.dispatch(actions.setName(this.props.firstName));
    this.props.dispatch(actions.setLastName(this.props.lastName));
    this.props.dispatch(actions.setHours(this.props.hours));
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
        <div className="bottom-border">
          <p>
            {" "}
            {this.props.firstName} {this.props.lastName}{" "}
          </p>
          <p>Hours: {this.props.hours} </p>

          <button onClick={this.setRemove}> REMOVE </button>
          <button onClick={this.setUpdate} className="margin-bottom-20px"> UPDATE </button>
        </div>
      );
    } 

    if (this.state.display === "set remove") {
      return <Redirect to="/remove" />;
    }

    if (this.state.display === "set update") {
        return <Redirect to="/update" />;
      }
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Client);
