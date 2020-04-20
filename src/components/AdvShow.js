import React from 'react'


const AdvShowCard = (props) => {

    function renderAdventure() {
        if (adventure) {
            return(
                <div>
                    <h2>{adventure.name}</h2>
                    <br />
                    <h3>{adventure.location}</h3>
                    <p>{adventure.description}</p>
                    <br />
                    {adventure.photos.map((image) => <img src={image.text}></img>)}
                </div>
            )
        }
    }
    
    const adventure = props.adventures.find(adventure => adventure.id == props.id)
    
    return (
        <>
            {renderAdventure(adventure)}
        </>
    )
}

export default AdvShowCard