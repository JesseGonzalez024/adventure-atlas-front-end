import React from 'react';
import { connect } from 'react-redux'

import { searchByLocation } from '../actions/adventures'
import { allAdventures } from '../reducers/adventureReducer'

class SearchBar extends React.Component {

    state = {
        search: ''
    }

    renderAdventures = () =>{
        if (this.state.search == ''){
            // this.props.fetchAdventures()

            // debugger 
        }
    }


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value}) 
        // this.props.searchByLocation(this.state.search, this.props.adventures) 
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.searchByLocation(this.state.search, this.props.adventures)
    }

    render() {
        return (
            <div>
                {this.renderAdventures()}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input id="searchBar"
                        type="text"
                        name="search" 
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.search}
                        placeholder="Search by location">
                    </input>
                    <button onClick={this.handleOnSubmit}>Search</button>
                </form>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventureReducer.adventures
    }
}

export default connect(mapStateToProps, { searchByLocation })(SearchBar)