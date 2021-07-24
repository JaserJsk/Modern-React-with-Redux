import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        // Prevent the webpage from submitting the form 
        // automatically when hitting Enter.
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;