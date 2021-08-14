import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Pages/Main';
import './index.css';
import Info from './components/Pages/Info';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Main}/>
      <Route path="/info" component={Info}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
