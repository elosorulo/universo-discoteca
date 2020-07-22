import React from 'react';
import ImageLayer from '../ImageLayer';

const ImagePages = (props) => {
    return props.images.map((image, index) => <ImageLayer src={image} key={index + 1} index={index + 1}/>)
};

export default ImagePages;
