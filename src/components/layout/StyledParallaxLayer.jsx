import {ParallaxLayer} from 'react-spring/renderprops-addons';
import styled from 'styled-components';

const StyledParallaxLayer = styled(ParallaxLayer)`
    overflow-x: hidden !important;
    max-width: 100%;
    -webkit-scrollbar { width: 0 !important }
`;

export default StyledParallaxLayer;
