import React from 'react';
import SearchBar from '../components/SearchBar'
import Filter from '../components/TagCard'
import Adventures from './Adventures'
// This container will host the 
//   - search bar component
//   - filter component
//   - adventures component, which in turn will render the stateless AdventureCard

const Library = props => (
        <div>
            <div>
                <h1>Adventure Atlas Library</h1>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Filter />
            </div>
            <div>
                <Adventures />
            </div>
        </div>
    

)

export default Library