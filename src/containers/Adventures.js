import React from 'react'
import SearchBar from '../components/SearchBar'
import Tags from './Tags'
import { connect } from 'react-redux'

import AdventureCard from '../components/AdventureCard'

class Adventures extends React.Component{
    

    renderAdventures = () => {
        return this.props.adventures.map((adv) => {
            return (
                <AdventureCard
                    key={adv.id}
                    id={adv.id} 
                    name={adv.name}
                    location={adv.location}
                    description={adv.description}
                    photos={adv.photos}
                />  
            )
        })
    }
    
    render() {
        return (
            <div>
                <br />
                <h1>Adventure Atlas Library</h1>
                <SearchBar />
                <Tags />
                <div id="AdventuresContainer">
                    {this.props.loading === true ? <p>Loading Content...</p> : this.renderAdventures()}
                </div>
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