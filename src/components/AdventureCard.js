import React from 'react'

const AdventureCard = props => {
    console.log(props.photos)

   let imageStyle ={
        borderRadius: "10px",
        width: "300px"
    }
    return (
        <div id={`AdvCard ${props.id}`}>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <img src={props.photos[0].text} style={imageStyle}></img>
        </div>
    )
}

export default AdventureCard