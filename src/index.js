import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clients from "./components/clients";
import SetRemove from "./components/set-remove";
import SetUpdate from "./components/set-update";
import AddCase from "./components/add-case";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/remove" component={SetRemove} />
            <Route exact path="/update" component={SetUpdate} />
            <Route exact path="/add-case" component={AddCase} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
