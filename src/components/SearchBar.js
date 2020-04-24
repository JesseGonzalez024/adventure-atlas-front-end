import React from 'react';

import { connect } from 'react-redux'

class SearchBar extends React.Component {

    state = {
        search: ''
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})  
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.handleSearchBar(this.state.search)
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
                    <button 
                        id="searchSubmit" 
                        onClick={(event) => this.handleOnSubmit(event)}
                        >Search
                    </button>
                </form>
                <br />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventureReducer.adventures
    }
}

export default connect(mapStateToProps)(SearchBar)