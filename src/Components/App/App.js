// maybe for a spinning meme logo later
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

// import styles from "./styles.module.css"

import React from 'react'
import { Header } from '../Header/Header.js'
import { Footer } from '../Footer/Footer.js'
import NavBar from '../NavBar/NavBar'
import { Meme } from "../Meme/Meme"
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const App = () => {
  return (
    <div className="page-container">
     <div className="content-wrap">

      <NavBar/>
      <Switch>
      <Route exact path='/'>
        <Meme />
      </Route>
      <Route path='/generated'>
        <MemeGenerated />
      </Route>
    </Switch>
    </div>
    <Footer />
    
    </div>
  );
}

