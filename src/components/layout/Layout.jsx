import {Parallax} from 'react-spring/renderprops-addons';
import StyledParallaxLayer from './StyledParallaxLayer';
import React from 'react';
import useAudio from '../../hooks/useAudio';
import SoundButton from './buttons/SoundButton';
import ImagePages from './pages/ImagePages';
import InitialPage from './pages/InitialPage';
import ContentService from '../../services/ContentService';

let parallax = null;

const Layout = () => {
    const images = ContentService.getImages();
    const sound = ContentService.getSound();
    const [playing, toggle] = useAudio(sound);
    const [started, setStarted] = React.useState(false);
    const start = () => {
        parallax.scrollTo(1);
        if(!started) {
            toggle();
            setStarted(true);
        }
    };
    
    return (
        <div started={started}>
            <SoundButton isVisible={started} playing={playing} onClick={ e => {
                    e.preventDefault();
                    toggle();
                }
            }/>
            <Parallax pages={images.length + 1} scrolling={started} vertical ref={ref => parallax = ref}>
                <StyledParallaxLayer speed={started ? 0.05 : 0.001}>
                    <InitialPage started={started} start={start}/>
                </StyledParallaxLayer>
                <ImagePages images={images} />
            </Parallax>
        </div>
    );
};

export default Layout;
