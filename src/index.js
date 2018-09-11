import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clients from "./components/clients";
import SetRemove from "./components/set-remove";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/set-remove" component={SetRemove} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
