// maybe for a spinning meme logo later
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

// import styles from "./styles.module.css"

import React from 'react'
import { Header } from '../Header/Header.js'
import { Footer } from '../Footer/Footer.js'
import { Meme } from "../Meme/Meme"
import { Switch, Route } from "react-router-dom"
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';


export const App = () => {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/'>
        <Meme />
      </Route>
      <Route path='/generated'>
        <MemeGenerated />
      </Route>
    </Switch>
    <Footer />
    </div>
  );
}

