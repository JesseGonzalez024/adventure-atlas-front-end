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

        debugger
        this.props.addAdventure(adventure)
        
        this.setState({
            name: '',
            location: '',
            description: '',
            photo: ''
        })
    }

    isValid() {
        if (this.state.name === '' || this.state.location === '' || this.state.description === '' || this.state.photo === '' || this.state.photoCollection.length === 0) {
            return false
        } else {
            return true
        }
    }
    
    handleMorePhotos = event => {
        event.preventDefault()
        let value = event.target.value
        this.setState(prevState => ({photo: '', photoCollection: [...prevState.photoCollection, value]}))
    }

    addPhotoEntries = () => {
            return (<input type="text" onChange={(event) => this.handleChange(event)} name="photo" value={this.state.photo}/>)
    }

    render(){
        
        return (
            <div>
                <h1>Create a New Adventure!</h1>
                
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <fieldset>
                        <div>
                            <label>Name: </label>
                            <input 
                                type="text" 
                                onChange={(event) => this.handleChange(event)} 
                                name="name" 
                                value={this.state.name} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <label>Location: </label>
                            <input 
                                type="text" 
                                onChange={(event) => this.handleChange(event)} 
                                name="location" 
                                value={this.state.location} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <label>Description: </label>
                            <textarea 
                                onChange={(event) => this.handleChange(event)} 
                                name="description" 
                                value={this.state.description} />
                            <br />
                            <br />
                        </div>
                        <div>
                        <p>{this.state.photoCollection < 1 ? "No photos have been uploaded" : `You have uploaded ${this.state.photoCollection.length} photos! Add another?`}</p>                        
                            <label>Photo URL: </label>
                            {this.addPhotoEntries()}           
                            {this.state.photo === '' ? "Upload a photo" : <button onClick={(event) => this.handleMorePhotos(event)} value={this.state.photo}> + </button>}                           
                        </div>
                        <button 
                            onClick={this.handleOnSubmit} 
                            type="submit" 
                            disabled={!this.isValid()} > Create! </button>
                        <br></br>
                        <Link to='/adventures'><button>View Existing Adventures</button></Link>
                        <br></br>
                    </fieldset>
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