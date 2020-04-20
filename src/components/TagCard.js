import React from 'react'

// Filter will be a presentational component
// Will recieve the filters from it's parent component
// Renders each individual tag 


const TagCard = (props) => {
    return (
        <>
            <h6>{props.text}</h6>
        </>
    )
}

export default TagCard