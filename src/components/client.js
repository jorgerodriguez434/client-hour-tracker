import React from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../actions";
import { connect } from "react-redux";

export class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      display: "landing",
      count:0
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

  showCases = () => {
    this.setState({
      display: "show-cases"
    });
    this.props.dispatch(actions.setName(this.props.firstName));
    this.props.dispatch(actions.setLastName(this.props.lastName));
    this.props.dispatch(actions.setCase(this.props.caseName, this.props.caseDescription));
   // this.props.dispatch(actions.addCase(this.props.caseName, this.props.caseDescription));
    this.props.dispatch(actions.receiveCases(this.props.cases));
  }

  render = () => {
     // console.log(this.props);
    if (this.state.display === "landing") {
      return (
        <div className="bottom-border">
          <p>
            {" "}
            {this.props.firstName} {this.props.lastName}{" "}
          </p>
          <p>Hours: {this.props.hours} </p>
        
          <button onClick={this.setRemove}> REMOVE </button>
          <button onClick={this.setUpdate} > UPDATE </button>
          <button onClick={this.showCases} className="margin-bottom-20px"> CASES </button>
        </div>
      );
    } 

    if (this.state.display === "set remove") {
      return <Redirect to="/remove" />;
    }

    if (this.state.display === "set update") {
        return <Redirect to="/update" />;
      }
      if (this.state.display === "show-cases") {
        return <Redirect to="/cases" />;
      }
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Client);
