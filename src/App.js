import React, { Component } from "react";
import { createStore } from 'redux';
import reducer from './reducers';
import HelloWorld from "./HelloWorld";

const initialState = {tech:"Redux/ React "};
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
