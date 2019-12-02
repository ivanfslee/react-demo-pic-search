import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    console.log(props);
    const images = props.images.map(image => {
        //key is id attached to each image assigned by unsplash api
        return <ImageCard key={image.id} image={image} />
    });
    console.log(images);
    return <div className="image-list">{images}</div>;
};

export default ImageList;
