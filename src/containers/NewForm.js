import React from 'react'
import { connect } from 'react-redux';

import TagInput from '../components/TagInput'
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
        const adventure = {name, location, description, photos_attributes: photoCollection.map((string) => ({text: string})), tags_attributes: tagCollection.map((string) => ({text: string}))}
        console.log('a')
        this.props.addAdventure(adventure)
        for(let i = 0 ; i < 10000 ; i++) {
            console.log('f')
        }
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

    renderTags = () => {
        // Add filter to only display unique tags here.
        return this.props.adventures.map((adv) => {
            return adv.tags.map((tag) => {
                return <TagInput key={tag.id} text={tag.text} handleCheck={this.handleCheck}/>
            })
        })
    }

    //Newest Addition
    handleCheck = (event) => {
        console.log(event.target.value)
        let value = event.target.value
        this.setState(prevState => ({tagCollection: [...prevState.tagCollection, value]}))
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
                        <p>Create new tags or Select from existing ones</p>
                        {this.renderTags()}
                        <br />
                        <br />
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

const mapStateToProps = (state) => {
    return {
        adventures: state.adventureReducer.adventures
    }
}

export default connect(mapStateToProps, { addAdventure })(NewAdventure);