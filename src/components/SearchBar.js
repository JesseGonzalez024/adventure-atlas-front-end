import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <p>Search by location or trail name</p>
                </div>
                <div>
                    <input id="searchBar" name="searchBar"></input>
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar