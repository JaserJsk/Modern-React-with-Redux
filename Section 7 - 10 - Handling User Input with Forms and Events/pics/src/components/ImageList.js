import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({ id, alt_description, urls }) => {
        return <img key={id} alt={alt_description} src={urls.regular} />
    });

    return <div>{images}</div>
};

export default ImageList;