const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let intervalId = null;
stop.setAttribute('disabled', true);

start.addEventListener('click', onStartBtn);
stop.addEventListener('click', onStopBtn);

function onStartBtn() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    // console.log('консоль лог кожну секунду');
  }, 1000);
  start.setAttribute('disabled', true);
  stop.removeAttribute('disabled');
}

function onStopBtn() {
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', true);
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
