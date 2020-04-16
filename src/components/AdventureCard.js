import React from 'react'
import { NavLink } from 'react-router-dom';

const AdventureCard = props => {
    console.log(props.photos)

   let imageStyle ={
        borderRadius: "10px",
        width: "300px"
    }
    return (
        <div id="AdvCard">
            <fieldset>
                <NavLink to='/adventures/:id'><h3>{props.name}</h3></NavLink>
                <p>{props.location}</p>
                <img src={props.photos[0].text} style={imageStyle}></img>
            </fieldset>
            <br />
        </div>
    )
}

export default AdventureCard