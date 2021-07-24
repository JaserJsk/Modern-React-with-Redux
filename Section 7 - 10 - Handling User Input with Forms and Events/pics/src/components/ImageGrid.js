import './ImageGrid.css';
import React from 'react';

import ImageCard from './ImageCard';

const ImageGrid = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-grid">{images}</div>
};

export default ImageGrid;