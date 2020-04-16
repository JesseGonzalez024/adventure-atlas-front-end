import React from 'react'
import { connect } from 'react-redux'

import AdventureCard from '../components/AdventureCard'


//Presentational Component
class Adventures extends React.Component{
    
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Adventure Cards are to be rendered here</p>
            </div>

        )
    };
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventureReducer.adventures,
        photos: state.photoReducer.photos
    }
}

export default connect(mapStateToProps)(Adventures)