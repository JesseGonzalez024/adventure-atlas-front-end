import React from 'react'

import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import List from './List'
import Tags from './Tags'


class Adventures extends React.Component{
    
    state = {
        adventures: this.props.adventures,
        search: false,
        tags: false
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
            if (this.state.tags === false) {
                this.setState({adventures: this.props.adventures})
            }
        }
    }

    handleTagSearch = (value) => {
        if (value) {
            let inputs = value.map((x) => {
                return x.value
            })
            console.log("inputs", inputs) 
            
            let array = []
            this.state.adventures.map((adv) => {
                adv.tags.filter((tag) => {
                    if (tag.text == inputs.map((x) => {return x})){
                        array.push(adv)
                    }
                })
            })
        console.log(array)
        this.setState({adventures: array})
        this.setState({tags: true})
        
        } else {
            this.setState({tags: false})
            if (this.state.search === false) {
                this.setState({adventures: this.props.adventures})
            }
        }
    }

    passAdventuresToList = () => {
        if (this.props.adventures.length === 0) {
            return <p>Loading Content...</p>
        }
        else if (this.state.search === false && this.state.tags === false) {
            return <List adventures={this.props.adventures}/>
        }
        else {
            return <List adventures={this.state.adventures}/>
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
