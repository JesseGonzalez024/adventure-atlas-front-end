import React from 'react'

import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import List from './List'
import Tags from './Tags'


class Adventures extends React.Component{
    
    state = {
        adventures: []
    }
    
    handleSearchBar = (value) => {
        let results = this.props.adventures.filter(adv => {
            return adv.location.includes(value)
          })
          console.log(results)

    }

    render() {

        return (
            <div>
                <br />
                <h1>Adventure Atlas Library</h1>
                <SearchBar adventures={this.props.adventures} handleSearchBar={this.handleSearchBar}/>
                <Tags tags={this.props.adventures}/>
                {this.props.adventures.length > 0 ? <List adventures={this.props.adventures}/> : <p>Loading Content...</p>}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventureReducer.adventures,
        loading: state.adventureReducer.loading
    }
}

export default connect(mapStateToProps)(Adventures)
