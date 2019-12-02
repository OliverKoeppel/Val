import React from 'react';
import {val_logo} from './Images/valtech_logo.png';
import {user_logo} from './Images/user_logo.png';
import {SearchComponent} from "./SearchComponent";
import {ProjectListComponent} from "./ProjectListComponent";
import './CSS/App.css';

function App() {

  return (
    <div className="App">

      <header id="App-header">
        <img id="valLogo" src={val_logo} alt="val_logo" />
        <img id="userLogo" src={user_logo}  alt="user_logo"  />
        <text id = "userName"> Max Mustermann</text>
      </header>

      <body>
        <SearchComponent/>
        <ProjectListComponent/>
      </body>

    </div>
  );
}

export default App;
