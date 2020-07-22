import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import React, { useEffect } from 'react';
import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';
import Image4 from '../assets/4.jpg';
import Image5 from '../assets/5.jpg';
import Image6 from '../assets/6.jpg';
import sonido from '../assets/universo-discoteca-sonido-entrega.mp3';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import PlayArrow from '@material-ui/icons/PlayArrow';


const paddingMinusBorder = (base, borderWidth) => base - borderWidth;
    
const padding = (baseX, baseY) => {
    return `${paddingMinusBorder(baseX, 0.1)}vmax ${paddingMinusBorder(baseY, 0.1)}vmax`;
};

const hoverTransform = `transform:scale(1.05, 1.05)`;

const backgroundColor = `hsla(255, 80%, 10%, 1);`;

const backgroundActive = `hsla(255, 80%, 20%, 1);`;

const fontColor = 'hsla(255, 80%, 80%, 1)';

const hover = (props) => !props.active ? `
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        ${hoverTransform}
      }
    }
  ` : "";


function useMobilePress(props) {

  const [active, isActive] = React.useState(false);
  const [moved, isMoved] = React.useState(false);
  
  return {
      onClick: (e) => {
          if(props.onClick !== undefined) props.onClick(e);
      },
      active: active && !moved,
      onTouchStart: (e) => {
          e.preventDefault();
          setTimeout(() => {
              if(!moved)isActive(true)
          }, 100);
          if(props.onTouchStart !== undefined) props.onTouchStart();
      },
      onTouchEnd: (e) => {
          e.preventDefault();
          e.persist();
          if(!moved)props.onClick(e);
          isMoved(false);
          isActive(false);
          setTimeout(() => isActive(false), 100);
          if(props.onTouchEnd !== undefined) props.onTouchEnd(e);   
      },
      onTouchMove: (e) => {
          e.preventDefault();
          isMoved(true);
          isActive(false);
          setTimeout(() => isActive(false), 100);
          if(props.onTouchMove !== undefined) props.onTouchMove(e);
      },
      onTouchCancel: (e) => {
          e.preventDefault();
          isActive(false);
          isMoved(false);
          setTimeout(() => isActive(false), 100);
          if(props.onTouchCancel !== undefined) props.onTouchCancel(e);
      },
      onMouseDown: (e) => {
          if(props.onMouseDown !== undefined) props.onMouseDown(e);
          isActive(true);
      },
      onMouseUp: (e) => {
          if(props.onMouseUp !== undefined) props.onMouseUp(e);
          isActive(false);
      },
      onMouseLeave: (e) => {
          if(props.onMouseUp !== undefined) props.onMouseUp(e);
          isActive(false);
      }
  };
};



const StyledParallaxLayer = styled(ParallaxLayer)`
`;

const Frame = styled.img`

`;

const Layer = (props) => {
    return (
        <StyledParallaxLayer factor={1} offset={props.index} speed={0.5} style={{ backgroundImage: `url(${props.src})`, backgroundSize: 'contain',
        backgroundPosition: 'center'}}/>
    );
};

let parallax = null;

const Title = styled.h1`
    margin-top: 15vh;
    font-size: 5em;
    text-align: center;
    color: ${fontColor};
`;

const SubTitle = styled.h1`
    margin-top: 5vh;
    font-size: 3em;
    text-align: center;
    color: ${fontColor};
`;

const Credit = styled.h1`
    margin-top: 5vh;
    font-size: 1.5em;
    text-align: center;
    color: ${fontColor};
`;

const ArrowOrPlayContainer = styled.div`
    margin-top: 30vh;
`;
const useAudio = () => {
    const [audio] = React.useState(new Audio(sonido));
    const [playing, setPlaying] = React.useState(false);
    const [initialPlay, setInitialPlay] = React.useState(false);
    const [autoPlayFailed, setAutoPlayFailed] = React.useState(false);

    const toggle = () => {
        console.log("ugu");
        setPlaying(!playing);
    };
    
    const triggerInitialPlay = () => {
        window.setTimeout(() => {
            const playResult = audio.play();
            if(playResult !== undefined) {
                playResult.catch(error => setAutoPlayFailed(true));
            };
        }, 100);
    };

    const handleInitialPlay = initialPlay => initialPlay ? triggerInitialPlay() : audio.play();

    React.useEffect(() => {
        playing ? handleInitialPlay(initialPlay) : audio.pause();
      },
      [playing]
    );
  
    React.useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle, initialPlay, setInitialPlay, autoPlayFailed];
  };

const StyledButton = styled.button`
    border-radius: 50%;
    padding: 0.4rem 0.5rem;
    border: 0.1vmax solid ${fontColor};
    box-sizing: border-box;
    &:focus {
        outline:none !important;
    };
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    position: relative;
    color: ${fontColor};
    ${props => hover(props)}
    ${props => props.active ? "transform:scale(0.95, 0.95);" : ""}
    background: ${props => props.active ? backgroundActive : backgroundColor};
    transition: ${ props => `background ${props.active ? 0 : 0.25}s linear;`};
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 5000;
`;

const Description = () => {
    
    return (
        <Grid item xs={12}>
            <Title>Universo</Title>
            <SubTitle>Discoteca</SubTitle>
            <Credit>Manuel Strajman</Credit>
        </Grid>
    );
}

const MobileStyledButton = (props) => {

    const press = useMobilePress(props);
    return (<StyledButton {...props} {...press}/>);
};

const PlayButton = styled(MobileStyledButton)`
    top: auto;
    right: auto;
`;

const ArrowOrPlayButton = (props) => {
    return (props.failed ?
        <PlayButton onClick={props.play}>
                <PlayArrow
                    fontSize="small"
                    style={{color: fontColor}}
                />
        </PlayButton>
            :
        <KeyboardArrowDownIcon style={{color: fontColor, fontSize: 50}}/>);
};

const InitialPage = (props) => {
    return (
        <Grid container justify={"center"}>
            <Grid item xs={12} container justify={"center"}>
                <Description/>
                <Grid item xs={12} align={"center"}>
                    <ArrowOrPlayContainer>
                        <ArrowOrPlayButton play={props.play} failed={props.failed}/>
                    </ArrowOrPlayContainer>
                </Grid>
            </Grid>
        </Grid>
    );
};

const SoundButton = (props) => {

    return (
        <MobileStyledButton
            onClick={props.onClick}
            isVisible={props.isVisible}
        >
            {
            props.playing ?
                <VolumeUpIcon
                    fontSize="small"
                    style={{color: fontColor}}
                /> :
                <VolumeOffIcon
                    fontSize="small"
                    style={{color: fontColor}}
                />
            }
        </MobileStyledButton>
    );
};

const Layout = (props) => {
    const images = [Image1, Image2, Image3, Image4, Image5, Image6];
    const [playing, toggle, initialPlay, setInitialPlay, autoPlayFailed] = useAudio();

    const play = () => {
        parallax.scrollTo(1);
        toggle();
    };

    const startSound = (e) => {
        if(e !== undefined) e.preventDefault();
        if(!initialPlay) {
            toggle();
            setInitialPlay(true);
        };
    };
    
    return (
        <div onScroll={e => startSound(e)} onMouseMove={e => startSound(e)}>
            <SoundButton playing={playing} onClick={ e => {
                    e.preventDefault();
                    toggle();
                }
            }/>
            <Parallax pages={images.length + 1} scrolling={true} vertical ref={ref => parallax = ref}>
            <StyledParallaxLayer speed={0.05}>
                <InitialPage failed={autoPlayFailed} play={play}/>
            </StyledParallaxLayer>
            {images.map((image, index) => <Layer src={image} key={index + 1} index={index + 1}/>)}
        </Parallax>
        </div>
    );
};

export default Layout;
