import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Adventures from './containers/Adventures'
import NewAdventure from './components/NewAdventure'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/adventures" component={Adventures}/>
        <Route exact path="/adventures/new" component={NewAdventure}/>
      </Switch>
    </div>
  );
}

export default App;
