import React from 'react';
import ReactDOM from 'react-dom';
import OgApp from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import NavBar from "./components/navBar"
import AboutLink from "./components/NavBar/AboutLink"
import Hi from "./components/hi"
import Bye from "./components/bye"
import Stuff from "./components/stuff"
import AddBookForm from './components/addBookForm'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={OgApp}>
      <IndexRoute component={Hi}></IndexRoute>
      <Route path="about" component={AboutLink}></Route>
      <Route path="bye" component={Bye}></Route>
      <Route path="stuff" component={Stuff}></Route>
      <Route path="addbook" component={AddBookForm}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
