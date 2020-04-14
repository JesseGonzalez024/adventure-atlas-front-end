import React from 'react'

class NewAdventure extends React.Component{

    state = {
        counter: [],
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
        console.log(this.state)  
      }

      handleMorePhotos = event => {
          // If a user selects to add more photos than another input field populates.
          event.preventDefault()
          this.setState(previousState => {
              return {counter: previousState.counter.push("Entry")}
          })
          
          console.log(this.state)
          
        //   for (let i = 0; i < this.state.counter; i++) {
            
        //   }
          
          
      }

    render(){
        // let photoInputs = this.state.counter.length.map((x) => {
        //     return (      
        //         <li><input type="text" onChange={(event) => this.handleChange(event)} name="photos" value={this.state.photos} /></li>
        //       )
        // })
        console.log(this.state)
        return (
            <div>
                <h1>Create a New Adventure!</h1>
                <h1>{this.state.counter.length > 1 ? "Has none" : this.state.counter}</h1>
                <form>
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
                            <label>Photo URL: </label> <button onClick={(event) => this.handleMorePhotos(event)}> + </button>
                                <ul id="photoUploadUl">
                                    {/* {photoInputs} */}
                                </ul>                          
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

// Needs acess to the store in order to create and send the new insatnce of adventure to teh database

export default NewAdventure