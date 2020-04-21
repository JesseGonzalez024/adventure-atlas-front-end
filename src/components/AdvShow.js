import React from 'react'
import TagCard from './TagCard'

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
                    {adventure.tags.map((tag) => <TagCard key={adventure.id} value={tag.text}/>)}
                    {adventure.photos.map((image) => <img key={adventure.id} src={image.text}></img>)}
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