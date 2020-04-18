import React from 'react';
import { connect } from 'react-redux'

import { searchByLocation } from '../actions/adventures'
import { fetchAdventures } from '../actions/adventures'

class SearchBar extends React.Component {

    state = {
        search: '',
        switch: true
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})  
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.searchByLocation(this.state.search, this.props.adventures)
        if (this.state.search == '') {
            this.props.fetchAdventures()
        }
        this.setState({search: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input id="searchBar"
                        type="text"
                        name="search" 
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.search}
                        placeholder="Search by location">
                    </input>
                    <button id="searchSubmit" onClick={this.handleOnSubmit}>Search</button>
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

export default connect(mapStateToProps, { searchByLocation, fetchAdventures })(SearchBar)