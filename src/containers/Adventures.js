import React from 'react'

import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import List from './List'
import Tags from './Tags'


class Adventures extends React.Component{
    
    state = {
        adventures: this.props.adventures,
        search: "",
        tags: []
    }

    searchResults = () => {
        let results = this.props.adventures.filter(adv => {
            return adv.location.includes(this.state.search)
          })
          if (this.state.tags.length > 0) {
           return results.filter((adv) => {
               let tagNames = adv.tags.map((tag) => tag.text)
                let matchingTags = tagNames.filter((tagName) => this.state.tags.includes(tagName))
                return matchingTags.length > 0 // Returns a boolean value which is needed as part of the filter iteration
            })
          } else {
              return results
          }
    }
    
    handleSearchBar = (value) => {
        this.setState({search: value})
    }


    handleTagSearch = (value) => {   
        if (value) {
            let inputs = value.map((x) => {
                return x.value
            })
            this.setState({tags: inputs})
        }
    }

    passAdventuresToList = () => {
        if (this.props.adventures.length === 0) {
            return <p>Loading Content...</p>
        }
        else {
            return <List adventures={this.searchResults()}/>
        }
    }

    render() {
        return (
            <div>
                <br />
                <h1>Adventure Atlas Library</h1>
                <SearchBar adventures={this.props.adventures} 
                    handleSearchBar={this.handleSearchBar}
                />
                <Tags 
                    handleTagSearch={this.handleTagSearch}
                />
                {this.passAdventuresToList()}
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
