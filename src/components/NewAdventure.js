import React from 'react'
import { connect } from 'react-redux';

import { addAdventure } from '../actions/adventures'

class NewAdventure extends React.Component{

    state = {
        // counter: [],
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
        const {name, location, description} = this.state
        
        const adventure = {
          name,
          location,
          description,
          photos: [],
          tags: []
        }

        // The addAdventure function is made available by the mapDispatchToProps
        this.props.addAdventure(adventure)

    this.setState({
      name: '',
      location: '',
      description: ''
    })
  }

  isValid() {
    if (this.state.name === '' || this.state.location === '' || this.state.description === '' || this.state.photo === '') {
      return false
    } else {
      return true
    }
  }

  handleMorePhotos = event => {
        event.preventDefault()
    //       // After first photo URl entry has been filled out, the + sign then becomes available for slection.
    //       // If a user selects to add more photos than another input field populates.
  }
    

    render(){
        
        console.log(this.state)
        return (
            <div>
                <h1>Create a New Adventure!</h1>
                {/* <h1>{this.state.counter.length > 1 ? "Has none" : this.state.counter}</h1> */}
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
                            <button onClick={(event) => this.handleMorePhotos(event)} disabled={!this.isValid()}> + </button> 
                                <ul id="photoUploadUl">
                                    {/* {photoInputs} */}
                                    <li><input type="text" onChange={(event) => this.handleChange(event)} name="photo" value={this.state.photos} /></li>
                                </ul>                          
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
    // The addAdventure function is accessible through the import up top.
  
    return {
      addAdventure: (adventure) => { dispatch(addAdventure(adventure, console.log("Running addAdventure function now", adventure))) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewAdventure);