import React from 'react'
import { connect } from 'react-redux';

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
        console.log("Handle On Change method", this.state)  
    }

    handleOnSubmit = event => {
        event.preventDefault()
        debugger
        const {name, location, description, photoCollection, tagCollection} = this.state
        
        const adventure = {
          name,
          location,
          description,
          photoCollection,
          tagCollection
        }

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
    
        this.setState({
            ...this.state, [this.state.photoCollection]: this.state.photoCollection.push(event.target.value)
        })
  }

    addPhotoEntries() {
        
        let x = 0
        
        while (x < this.state.photoCollection.length + 1) {
            x++
            return <li><input type="text" onChange={(event) => this.handleChange(event)} name="photo" value={this.state.photos}/></li>
        }
    }

    
    render(){

        console.log(this.state)
        return (
            <div>
                <h1>Create a New Adventure!</h1>
                <p>{this.state.photoCollection < 1 ? "No photos have been uploaded at this time" : `You have uploaded ${this.state.photoCollection.length} photos!`}</p>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <fieldset>
                        <div>
                            <label>Name: </label>
                            <input type="text" onChange={(event) => this.handleChange(event)} name="name" value={this.state.name} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <label>Location: </label>
                            <input type="text" onChange={(event) => this.handleChange(event)} name="location" value={this.state.location} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <label>Description: </label>
                            <textarea onChange={(event) => this.handleChange(event)} name="description" value={this.state.description} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <label>Photo URL: </label>
                                <ul >
                                    {this.addPhotoEntries()}
                                </ul>
                                {this.state.photo === '' ? "Add a photo" : <button onClick={(event) => this.handleMorePhotos(event)} value={this.state.photo}> + </button>}                           
                        </div>
                        <button onClick={this.handleOnSubmit} type="submit" disabled={!this.isValid()} > Create! </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

// Needs acess to the store in order to create and send the new insatnce of adventure to teh database
const mapStateToProps = state => {
    console.log(state)
    //mapStateToProps is redefining the store/state here
  
    return {
      adventure: state.adventure
    }
  }

const mapDispatchToProps = dispatch => {
    console.log("Inside mapDispatchToProps")
    //The addAdventure function is accessible through the import up top.
  
    return {
      addAdventure: (adventure) => { dispatch(addAdventure(adventure, console.log("Running addAdventure function now", adventure))) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewAdventure);