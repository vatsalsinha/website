import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {About, Faq, Sponsers, Events} from './components';

const e = React.createElement
const appEl = document.getElementById('root')
if(appEl){
  ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.getElementById('root')
  );
}
const aboutEl = document.getElementById('about')
if (aboutEl){
  ReactDOM.render(e(About), aboutEl)
}
const eventsEl = document.getElementById('events')
if (eventsEl){
  ReactDOM.render(e(Events), eventsEl)
}
const sponsersEl = document.getElementById('sponsers')
if (sponsersEl){
  ReactDOM.render(e(Sponsers), sponsersEl)
}
const faqEl = document.getElementById('faq')
if (faqEl){
  ReactDOM.render(e(Faq), faqEl)
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
