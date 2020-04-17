import React from 'react'
import { connect } from 'react-redux'

import { fetchAdventures } from '../actions/adventures'
import AdventureCard from '../components/AdventureCard'

class Adventures extends React.Component{
    
    componentDidMount(){
        this.props.fetchAdventures()
    }

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
        console.log(this.props)
        return (
            <div id="AdventuresContainer">
                {this.props.loading === true ? <p>Loading Content...</p> : this.renderAdventures()}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        adventures: state.adventureReducer.adventures,
        loading: state.adventureReducer.loading
    }
}

export default connect(mapStateToProps, { fetchAdventures })(Adventures)