import React from 'react'
import { Link } from 'react-router-dom';

import Adventures from '../containers/Adventures'
import NewAdventure from './NewAdventure'

//Presentational Component

const Home = props => (
    <div>
        <p>Welcome to...</p>
            <h1>Adventure Atlas</h1>
                <Link to={Adventures}><button>View All Adventures</button></Link>
                <Link to={NewAdventure}><button>Create New Adventure</button></Link>
    </div>
  )

export default Home;