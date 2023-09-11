import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);

const LS_KEY = 'videoplayer-current-time';

window.addEventListener('load', savedTimeToPlay);

player.on('timeupdate', throttle(getTimeInLs, 1000));

function getTimeInLs(data) {
  const currentSeco = data.seconds;
  console.log(currentSeco);
  localStorage.setItem(LS_KEY, currentSeco);
}

function savedTimeToPlay() {
  const savedTime = localStorage.getItem(LS_KEY);
  if (savedTime) {
    const currentTime = savedTime;

    player.setCurrentTime(currentTime);
  }
}
