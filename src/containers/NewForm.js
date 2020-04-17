import React from 'react'
import { connect } from 'react-redux';

import { addAdventure } from '../actions/adventures'
import { addPhotos } from '../actions/photos'
import { addTags } from '../actions/tags'

class NewAdventure extends React.Component{

    state = {
        name:  '',
        location: '',
        description: '',
        photo: '',
        tags: '',
        photoCollection: [],
        tagCollection: []
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})  
    }

    handleOnSubmit = event => {
        event.preventDefault()

        const {name, location, description, photoCollection, tagCollection} = this.state
        const adventure = {name, location, description}
        const photos = {photoCollection}
        // const tags = {tagCollection}

        this.props.addAdventure(adventure)
        this.props.addPhotos(photos) 
            // .then(resp => console.log(resp), this.props.addPhotos(photos))
        // this.props.addTags(tags)   
        
        this.setState({
            name: '',
            location: '',
            description: '',
            photo: ''
        })
    }

    isValid() {
        if (this.state.name === '' || this.state.location === '' || this.state.description === '' || this.state.photoCollection.length === 0) {
            return false
        } else {
            return true
        }
    }
    
    addPhotos = event => {
        event.preventDefault()
        let value = event.target.value
        this.setState(prevState => ({photo: '', photoCollection: [...prevState.photoCollection, value]}))
    }

    render(){
        
        return (
            <div>
                <h1>Create a New Adventure!</h1>
                
                <form id="newForm" onSubmit={(event) => this.handleOnSubmit(event)}>
                        <div>
                            <input 
                                id="newFormInput"
                                type="text" 
                                onChange={(event) => this.handleChange(event)} 
                                name="name"
                                placeholder="Name"  
                                value={this.state.name} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <input 
                                id="newFormInput"
                                type="text" 
                                onChange={(event) => this.handleChange(event)} 
                                name="location" 
                                placeholder="Location" 
                                value={this.state.location} />
                            <br />
                            <br />
                        </div>
                        <div>           
                            <input 
                                id="newFormInput"
                                type="text" 
                                onChange={(event) => this.handleChange(event)} 
                                name="photo"
                                placeholder="Photo URL"  
                                value={this.state.photo}/>{this.state.photo === '' ? null : <button onClick={(event) => this.addPhotos(event)} value={this.state.photo}> + </button>}
                            <p>{this.state.photoCollection < 1 ? "No photos uploaded" : `${this.state.photoCollection.length} photos uploaded! Add more?`}</p>                           
                        </div>
                        <div>
                            <textarea 
                                id="newFormInput"
                                onChange={(event) => this.handleChange(event)} 
                                name="description"
                                placeholder="Description" 
                                value={this.state.description} />
                            <br />
                            <br />
                        </div>
                        <button 
                            onClick={this.handleOnSubmit} 
                            type="submit" 
                            disabled={!this.isValid()} > Create! </button>
                        <br></br>
                        <br></br>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
 
    return {
      addAdventure: (adventure) => { dispatch(addAdventure(adventure, console.log("Running addAdventure function now", adventure)))},
      addPhotos: (photos) => {dispatch(addPhotos(photos))},
      addTags: (tags) => {dispatch(addTags(tags))}
    }
}

export default connect(null, mapDispatchToProps)(NewAdventure);