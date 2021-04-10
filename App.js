import React from "react";
import HomeScreen from "./screens/homescreen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import BottomTab from './Nav'


const reducer = (state = { menu: "closeMenu" }, action) => {
  console.log("App reducer : ", action.type);
  switch (action.type) {
    case "OPENMENU":
      return { menu: "openMenu" };
    case "CLOSEMENU":
      return { menu: "closeMenu" };
    default:
      return state;
  }
};

const database = createStore(reducer);

const App = () => (
  <Provider store={database}>
    <BottomTab/>
  </Provider>
);

export default App;
