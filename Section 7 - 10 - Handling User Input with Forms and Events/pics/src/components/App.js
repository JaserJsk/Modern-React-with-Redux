import React from 'react';

import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
//import ImageList from './ImageList';
import ImageGrid from './ImageGrid';

class App extends React.Component {
    state = { images: [] };
    
    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>

                Found: { this.state.images.length } images
                
                <ImageGrid images={this.state.images} />
            </div>
        );
    }
}

export default App;