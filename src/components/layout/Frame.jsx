import React from 'react';
import styled from "styled-components";
import {backgroundActive, fontColor} from '../../style/color';
import isVertical from '../../utils/isVertical';
import { isMobile, isTablet } from 'react-device-detect';

const FrameImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border: 0.05rem solid ${fontColor};
`;

const verticalFrameDimensions = `
    margin-top: 10vh;
    padding: 5%;
    width: 80%;
    margin-left: 5%;
`;


const horizontalFrameDimensions = `
    margin-top: 8vh;
    padding: 5%;
    width: 50%;
    margin-left: 20%;
`;

const horizontalMobileFrameDimensions = `
    margin-top: ${!isTablet ? "5vh" : "18vh"};
    padding: 5%;
    width: 60%;
    margin-left: 15%;
`;

const FrameContainer = styled.div`
    ${isVertical ? verticalFrameDimensions : (isMobile ? horizontalMobileFrameDimensions : horizontalFrameDimensions)}
    background: ${backgroundActive};
    border: 0.05rem solid ${fontColor};
`;

const Frame = (props) => {
    return (
        <FrameContainer>
            <FrameImage src={props.src}/>
        </FrameContainer>
    );
};

export default Frame;
