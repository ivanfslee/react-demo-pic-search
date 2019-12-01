import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        //event obj parameter 
        console.log(event.target.value); //contains search string user typed into search bar
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                        {/* any time input in search bar, onInputChange method will be invoked. onChange property */}
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;