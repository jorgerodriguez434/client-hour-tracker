import React from "react";
import { Link } from "react-router-dom";
export default class Links extends React.Component {

    render() {
        return (
          <div className="link-group">
            <Link className="link" to="/">Register Client</Link>
            <Link className="link" to="/clients">Clients</Link>
          </div>
        );
      }

}