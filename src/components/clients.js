import React from "react";
import { connect } from "react-redux";

export class Clients extends React.Component {
  render() {
    return (
      <div>
        <h1> this is the clients Component </h1>
        <ul>
          {this.props.state.clients.map((client, index) => {
            return (
              <li key={index}>
                {" "}
                {client.name} {client.lastName}
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
