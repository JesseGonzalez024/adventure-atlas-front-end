import React from 'react';
import SearchBar from '../components/SearchBar'
import Filter from '../components/TagCard'
import Adventures from './Adventures'

const Library = () => (
        <div>
            <h1>Adventure Atlas Library</h1>
            <SearchBar />
            <Filter />
            <Adventures />
        </div>
)

export default Library