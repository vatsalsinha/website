import React from 'react';
import logo from './logo.svg';
import './App.css';
import {About, Faq, Sponsers, Events} from './components';
import  {Route, Link, Switch } from 'react-router-dom'; 
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
				<div>
					<Switch>
						<Route path = "/about"  component = {About} />
						<Route path = "/Faq"  component = {Faq} />
						<Route path = "/Sponsers" component = {Sponsers} />
						<Route path = "Events" component = {Events} />
					</Switch>
				</div>
			</Router>
    </div>
  );
}

export default App;
