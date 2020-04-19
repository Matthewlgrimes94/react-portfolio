import React from 'react';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {Route, Switch } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
}

export default App;
