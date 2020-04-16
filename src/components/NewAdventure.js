import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addAdventure } from '../actions/adventures'

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
        const adventure = {name, location, description, photoCollection, tagCollection}

        this.props.addAdventure(adventure)    
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
                            <p>{this.state.photoCollection < 1 ? "No photos have been uploaded" : `You have uploaded ${this.state.photoCollection.length} photos! Add another?`}</p>                           
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
                        <Link to='/adventures'><button>View Existing Adventures</button></Link>
                        <br></br>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
 
    return {
      addAdventure: (adventure) => { dispatch(addAdventure(adventure, console.log("Running addAdventure function now", adventure))) }
    }
}

export default connect(null, mapDispatchToProps)(NewAdventure);