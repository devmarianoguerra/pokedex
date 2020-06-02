import React from "react";
import "./App.css";
import Pokemon from "./components/pokemon";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
}

export default App;
