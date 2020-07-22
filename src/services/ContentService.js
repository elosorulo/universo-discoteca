import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';
import Image4 from '../assets/4.jpg';
import Image5 from '../assets/5.jpg';
import Image6 from '../assets/6.jpg';
import sound from '../assets/universo-discoteca-sonido-entrega.mp3';

const getImages = () => {
    return [Image1, Image2, Image3, Image4, Image5, Image6];
};

const getSound = () => {
    return sound;
};

export default {
    getImages: getImages,
    getSound: getSound
};
