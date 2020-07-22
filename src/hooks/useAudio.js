import React from 'react';

const useAudio = (file) => {
    const [audio] = React.useState(new Audio(file));
    const [playing, setPlaying] = React.useState(false);
    
    const toggle = () => {
        setPlaying(!playing);
    };

    const play = () => {
        
        const playResult = audio.play();
        if(playResult !== undefined) {
            playResult.catch(error => {
                console.error("error triggering play");
                console.error(error);
                setPlaying(false)
            });
        }
    };
    
    React.useEffect(() => {
        playing ? play() : audio.pause();
      },
      [playing]
    );
  
    React.useEffect(() => {
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
      });
      return () => {
        audio.removeEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play();
          });
      };
    }, []);
  
    return [playing, toggle];
  };

  export default useAudio;
