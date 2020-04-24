import React from  'react'

import AdventureCard from '../components/AdventureCard'

class List extends React.Component {

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

    render(){
        return(
            <div>
                {this.renderAdventures()}
            </div>
        );
    };
}

export default List