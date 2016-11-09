import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from "react-router"

//import NavBar from "./components/navBar"
import Home from './components/pages/home'
import Browse from './components/pages/browse'
import Search from './components/pages/search'
import Cart from './components/pages/cart'
import About from './components/pages/about'

import AddBookForm from './components/addBookForm'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home}></Route>
      <Route path="browse" component={Browse}></Route>
      <Route path="search" component={Search}></Route>
      <Route path="cart" component={Cart}></Route>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
