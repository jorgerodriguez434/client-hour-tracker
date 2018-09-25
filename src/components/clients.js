import React from "react";
import { connect } from "react-redux";
import Client from "./client";
import { API_BASE_URL } from "../config";
import * as actions from "../actions";
import Links from "./links";


export class Clients extends React.Component {

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

  componentDidMount= () => {
    this.fetchClients();
  }

  render = () => {
 
    this.props.state.clients.sort((a,b) => {
      if(a.firstName < b.firstName) return -1;
      if(a.firstName > b.firstName) return 1;
      return 0;
    });
  
    return (
      <div>
        <Links/>
        <h1> Clients</h1>
        <ul>
          {this.props.state.clients.map((client, index) => {
            return (
              <li key={index}>
                <Client hours={client.hours} clientId={client._id} firstName={client.firstName} lastName={client.lastName}/>
               </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Clients);
