import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';

import Home from './components/Home'
import Library from './containers/Library'
import NewAdventure from './containers/NewForm'
import NavBar from './components/NavBar'

import { fetchAdventures } from './actions/adventures'
// import { fetchPhotos } from './actions/photos'
// import { fetchTags } from '../actions/tags'

class App extends React.Component {

  componentDidMount(){
    console.log(this.props)
    
    this.props.fetchAdventures()
    // this.props.fetchPhotos()

    console.log("fetch actions initiated")
  }
  
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

const mapDispatchToProps = (dispatch) => {

  return {
    fetchAdventures: (adventures) => { dispatch(fetchAdventures(adventures, console.log("Running fetchAdventures function now", adventures)))},
    // fetchPhotos: (photos) => {dispatch(fetchPhotos(photos))},
    // fetchTags: (tags) => {dispatch(fetchTags(tags))}
  }

}

export default connect(null, mapDispatchToProps)(App);
