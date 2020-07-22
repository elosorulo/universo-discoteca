import React from 'react';
import StyledParallaxLayer from './StyledParallaxLayer';

const ImageLayer = (props) => {
    return (
        <StyledParallaxLayer factor={1} offset={props.index} speed={0.5} style={{ backgroundImage: `url(${props.src})`, backgroundSize: 'contain',
        backgroundPosition: 'center'}}/>
    );
};

export default ImageLayer;
