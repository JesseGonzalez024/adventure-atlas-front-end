import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Library from './containers/Library'
import NewAdventure from './containers/NewForm'
import NavBar from './components/NavBar'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/adventures" component={Library}/>
          <Route exact path="/adventures/new" component={NewAdventure}/>
        </Switch>
      </div>
    );
  }
}

export default App;
