import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Library from './containers/Library'
import NewAdventure from './containers/NewForm'
import NavBar from './components/NavBar'
import AdvShowCard from './components/AdvShowCard'

const App = () => {
  
  return(
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/adventures" component={Library}/>
          <Route exact path="/adventures/new" component={NewAdventure}/>
          <Route exact path='/adventures/:id' component={( { match } ) => <AdvShowCard match={match} />}/>
        </Switch>
      </div>
  );
}

export default App
