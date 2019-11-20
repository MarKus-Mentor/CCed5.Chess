import setup from './setup';

let totalSeconds = localStorage.getItem('timer') || 0;
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
setInterval(setTime, 1000);

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  localStorage.setItem('timer', JSON.stringify(totalSeconds));
}

document.getElementById('fireworks').hidden = true;
document.getElementById('time').hidden = false;
document.getElementById('wrapper').hidden = false;
//checkWinner();

//changePlayer(); to wszystko na później

window.onload = setup;
