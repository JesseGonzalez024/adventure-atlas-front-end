import React from 'react'

import { NavLink } from 'react-router-dom';

const AdventureCard = props => {

    return (
        <div id="AdvCard">
            <fieldset>
                <NavLink key={props.id} to={`/adventures/${props.id}`}><h3>{props.name}</h3></NavLink>
                <p>{props.location}</p>
                <img src={props.photos[0].text}></img>
            </fieldset>
            <br />
        </div>
    )
}

export default AdventureCard