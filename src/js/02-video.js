import Player from '@vimeo/player';

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);

const LS_KEY = 'videoplayer-current-time';

iframe.addEventListener('load', savedTimeToPlay);

player.on('timeupdate', getTimeInLs);

function getTimeInLs(data) {
  const currentSeco = data.seconds;
  console.log(currentSeco);
  localStorage.setItem(LS_KEY, currentSeco);
}

function savedTimeToPlay() {
  const savedTime = localStorage.getItem(LS_KEY);
  if (savedTime) {
    const currentTime = savedTime;

    player
      .setCurrentTime(currentTime)
      .then(function () {
        console.log('Почати відтворення з часу:', currentTime);
        player.play();
      })
      .catch(function (error) {
        console.log('Помилка встановлення часу:', error);
      });
  }
}
