import React from 'react'
import { connect } from 'react-redux'

import AdventureCard from '../components/AdventureCard'

class Adventures extends React.Component{
    
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
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventureReducer.adventures
    }
}

export default connect(mapStateToProps)(Adventures)