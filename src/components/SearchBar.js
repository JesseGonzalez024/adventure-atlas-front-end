import React from 'react';

class SearchBar extends React.Component {

    state = {
        search: ''
    }

    render() {
        return (
            <div>
                <form>
                    <input id="searchBar" 
                        name="searchBar" 
                        placeholder="Search by location"
                        value={this.state.search}>
                    </input>
                    <button>Search</button>
                </form>
                <br />
            </div>
        )
    }
}

export default SearchBar