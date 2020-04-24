import React from 'react'

import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import List from './List'
import Tags from './Tags'


class Adventures extends React.Component{
    
    state = {
        adventures: [],
        search: false
    }
    
    handleSearchBar = (value) => {
        if (value) {
            let results = this.props.adventures.filter(adv => {
                return adv.location.includes(value)
              }) 
              this.setState({adventures: results})
              this.setState({search: true})
        }
        else {
            this.setState({search: false})
        }
    }

    handleTagSearch = () => {

    }

    passAdevnturesToList = () => {
        if (this.props.adventures.length === 0) {
            return <p>Loading Content...</p>
        } else if (this.state.search === false){
            return <List adventures={this.props.adventures}/>
        } else if (this.state.search === true) {
            return <List adventures={this.state.adventures}/>
        }
    }

    render() {
        return (
            <div>
                <br />
                <h1>Adventure Atlas Library</h1>
                <SearchBar adventures={this.props.adventures} 
                    handleSearchBar={this.handleSearchBar}/>
                <Tags 
                    handleTagSearch={TouchList.handleTagSearch}/>
                {this.passAdevnturesToList()}
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
