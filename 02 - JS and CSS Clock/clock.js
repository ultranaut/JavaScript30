const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setTime = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  let rotation;

  rotation = second * 6 + 90;
  secondHand.style.transform = `rotate(${rotation}deg)`;

  rotation = (minute + second / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${rotation}deg)`;

  rotation = (hour + minute / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${rotation}deg)`;
};

setTime();
setInterval(setTime, 1000);
