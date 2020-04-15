import React from 'react';

//Search through location or trail name


class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h5>Search with location or trail name</h5>
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