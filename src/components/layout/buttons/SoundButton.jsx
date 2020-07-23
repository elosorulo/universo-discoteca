import React from 'react';
import StyledButton from '../../buttons/StyledButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { fontColor } from '../../../style/color';

import { isMobile } from 'react-device-detect';

const SoundButton = (props) => {

    return (props.isVisible ?
        (
            <StyledButton
                top={isMobile ? 2 : 5}
                right={5}
                floating
                absolute
                onClick={props.onClick}
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
            </StyledButton>
        ) : <></>
    );
};

export default SoundButton;
