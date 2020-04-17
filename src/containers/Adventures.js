import React from 'react'
import { connect } from 'react-redux'

import { fetchAdventures } from '../actions/adventures'
import AdventureCard from '../components/AdventureCard'

class Adventures extends React.Component{
    
    componentDidMount(){
        this.props.fetchAdventures()
    }
    
    
    render() {
        console.log(this.props)
        return (
            <div id="AdventuresContainer">
                {this.props.adventures.map((adv) => 
                    <AdventureCard
                    key={adv.id}
                    id={adv.id} 
                    name={adv.name}
                    location={adv.location}
                    description={adv.description}
                    photos={adv.photos}
                    />                
                )}
                <br />
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