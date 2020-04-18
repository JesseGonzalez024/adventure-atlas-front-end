import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';

import Home from './components/Home'
import Library from './containers/Library'
import NewAdventure from './containers/NewForm'
import NavBar from './components/NavBar'
import AdvShowCard from './components/AdvShow'
import { fetchAdventures } from './actions/adventures'

class App extends React.Component{
  
  componentDidMount(){
    this.props.fetchAdventures()
  }

  render(){
  return(
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/adventures" component={Library}/>
          <Route exact path="/adventures/new" component={NewAdventure}/>
          <Route exact path='/adventures/:id' component={( { match } ) => <AdvShowCard adventures={this.props.adventures} match={match} id={match.params.id}/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      adventures: state.adventureReducer.adventures
  }
}

export default connect(mapStateToProps, { fetchAdventures })(App)
