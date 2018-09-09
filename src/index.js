import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
