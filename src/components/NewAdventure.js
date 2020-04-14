import React from 'react'

class NewAdventure extends React.Component{

    state = {
        name:  '',
        location: '',
        description: '',
        photos: '',
        tags: ''
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value}
        )  
      }

      handleMorePhotos = event => {
          // If a user selects to add more photos than another input field populates.
      }

    render(){
        return (
            <div>
                <h1>Create a New Adventure!</h1>
                <form>
                    <fieldset>
                        <label>Name: </label>
                        <input type="text" onChange={(event) => this.handleChange(event)} name="name" value={this.state.name} />
                        <br />
                        <br />
                        <label>Location: </label>
                        <input type="text" onChange={(event) => this.handleChange(event)} name="location" value={this.state.location} />
                        <br />
                        <br />
                        <label>Description: </label>
                        <textarea onChange={(event) => this.handleChange(event)} name="description" value={this.state.description} />
                        <br />
                        <br />
                        <label>Photo URL: </label>
                        <input type="text" onChange={(event) => this.handleChange(event)} name="photos" value={this.state.photos} />
                        <button onClick={(event) => this.handleMorePhotos(event)}> + </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

// Needs acess to the store in order to create and send the new insatnce of adventure to teh database

export default NewAdventure