import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit= event => {
        event.preventDefault(); //stops browser from refreshing the page
        //console.log(this.state.term);
        this.props.runWhenUserSubmits(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;