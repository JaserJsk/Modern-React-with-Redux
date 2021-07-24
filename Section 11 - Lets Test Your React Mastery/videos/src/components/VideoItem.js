import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {

    const videoPublished = new Date(props.video.snippet.publishedAt);
    const formatedDate = (
        videoPublished.getMonth() + 1 + '/' +
        videoPublished.getDate() + '/' +
        videoPublished.getFullYear()
    );

    return (
        <div onClick={() => props.onSelect(props.video)} className="video-item item">
            <img className="ui image"
                alt={props.video.snippet.title}
                src={props.video.snippet.thumbnails.medium.url}
            />
            <div className="content ui grid">
                <div className="ui row">
                    <div className="column" >
                        <h4 className="video-title-truncate">
                            {props.video.snippet.title}
                        </h4>
                    </div>
                </div>
                <div className="ui row">
                    <div className="column">
                        {formatedDate}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;