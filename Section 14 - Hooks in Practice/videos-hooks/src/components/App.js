import React, { useState, useEffect } from 'react';

import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('Reactjs');

    useEffect(() => {
        // Set the first video in the search in the video player
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container" style={{ marginTop: '20px' }}>
            <SearchBar onFormSubmit={search} />
            <div className="ui grid" style={{ marginTop: '10px' }}>
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onSelectedVideo={(video) => setSelectedVideo(video)}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;