import React from "react";
 //import { Redirect } from "react-router-dom";
 import * as actions from "../actions";
 import { connect } from "react-redux";
import { API_BASE_URL } from "../config";

export class ShowCases extends React.Component {

    fetchClients = () => {
        console.log('fetching clients');
        fetch(API_BASE_URL)
          .then(res => res.json())
          .then(
            clients => {
                this.props.dispatch(actions.receiveClients(clients));
            }
          );
      };

    componentDidMount = () => {
        this.fetchClients();
    }

    render = () => {
       
      console.log(this.props.state)
       return ( <div> 

            <h1> Showing cases for:</h1> 
            <h2> {this.props.state.firstName}</h2>

            <ul>
          {this.props.state.cases.map((_case, index) => {
            return (
              <li key={index}>
                 <h3> {_case.name} </h3>
                 <p> {_case.description}</p>
               </li>
            );
          })}
        </ul>


       </div> );
    }

}

export const mapStateToProps = state => ({
    state
  });
  
  export default connect(mapStateToProps)(ShowCases);