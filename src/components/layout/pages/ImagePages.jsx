import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import Frame from '../Frame';
import {chunk} from 'lodash';
import isVertical from '../../../utils/isVertical';

const Layer = (props) => {
    return (
        <ParallaxLayer key={"layer" + props.index + 1} ParallaxLayer factor={1.5} offset={props.index + 1} speed={0.5}>
            {props.children}
        </ParallaxLayer>
    );
};

const horizontalPages = (props) => {
    return props.images.map((image, index) => (
            <Layer index={index}>
                <Frame src={image}/>
            </Layer>
        )
    )
}

const verticalPages = (props) => {
    const imagesChunk = chunk(props.images, 2);
    console.log(imagesChunk.length);
    return imagesChunk.map((imageTuple, index) => (
            <Layer index={index}>
                {imageTuple.map((image, imageIndex)  => <Frame key={"image" + imageIndex} src={image}/>)}
            </Layer>
        )
    )
}

const ImagePages = (props) => {
    return isVertical ? verticalPages(props) : horizontalPages(props);
};

export default ImagePages;
