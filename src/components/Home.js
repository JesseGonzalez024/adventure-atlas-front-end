import React from 'react'
import { Link } from 'react-router-dom';

//Presentational Component

const Home = props => (
    <div>
        <p>Welcome to...</p>
            <h1>Adventure Atlas</h1>
                <Link to='/adventures'><button>View All Adventures</button></Link>
                <Link to={'/adventures/new'}><button>Create New Adventure</button></Link>
    </div>
  )

export default Home;