
import Player from '@vimeo/player';
 import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



const onPlay = function (data) {
    
    localStorage.setItem("videoplayer-current-time", data.seconds );
};

const currentTimeThrottle = player.on('timeupdate', throttle(onPlay, 1000) );
const getCurrentTime = localStorage.getItem('videoplayer-current-time')


player.setCurrentTime(getCurrentTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
           
            break;
    }
});

