import React from 'react';
import SearchBar from '../components/SearchBar'
import Tags from './Tags'
import Adventures from './Adventures'

const Library = () => (
        <div>
            <br />
            <h1>Adventure Atlas Library</h1>
            <SearchBar />
            {/* <Tags /> */}
            <Adventures />
        </div>
)

export default Library