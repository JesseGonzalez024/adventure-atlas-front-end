import React from 'react'
import { Link } from 'react-router-dom';

//Presentational Component

const buttonStyle = {
  backgroundColor: "#2a9fc9",
  color: "rgb(231, 228, 238)",
  borderRadius: "10px",
  fontFamily: "Impact",
  fontSize: "30px",
  margin: "15px",
}


const Home = props => (
    <div>
        <p>Find your local adventure with...</p>
            <h1>Adventure Atlas</h1>
                <Link to='/adventures'><button style={buttonStyle} >View All Adventures</button></Link>
                <Link to={'/adventures/new'}><button style={buttonStyle} >Create New Adventure</button></Link>
    </div>
  )

export default Home;