const React = require('react')
const Router = require('react-router')
const HomeLink = require('./components/NavBar')
const AboutLink = require('./components/NavBar')


const DefaultRoute = Router.DefaultRoute
const Route = Router.Route

const routes = (
  <Route name="OgApp" path="/" handler={ require('./index.js')}>
    <DefaultRoute handler={require( './App.js' )} />
    <Route name="about" handler={AboutLink} />
  </Route>
    )
