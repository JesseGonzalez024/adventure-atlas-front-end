import React from 'react'
import { Link } from 'react-router-dom';

//Presentational Component

const Home = props => (
    <div>
        <p id="homeIntro">Find your next local adventure with...</p>
            <h1 id="homeTitle">Adventure Atlas</h1>
                <Link to='/adventures'><button>All Adventures</button></Link>
                <Link to='/adventures/new'><button> New Adventure</button></Link>
    </div>
  )

export default Home;