import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Aloha from "./components/Aloha";
import AlohaDashboard from "./components/Aloha/AlohaDashboard"

function App() {
    


    const userGreetings = users.map((user) => (<li>Aloha name = {`${user.firstname} ${user.lastname}`}</li>));
    /*
  return (
    <li>
      <Aloha name="John"/>
      <Aloha name="Bob" />
      <Aloha />
    </li>
  ); */
  return (
      <ul>

      </ul>
  );
}

export default App;
