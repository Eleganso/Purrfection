'use strict';

const audio = new Audio();
audio.src = 'sound/cat1.mp3';
const audio2 = new Audio();
audio2.src = 'sound/cat2.mp3';
const audio3 = new Audio();
audio3.src = 'sound/cat3.mp3';
const purr1 = new Audio();
purr1.src = 'sound/purr1.mp3';
const purr2 = new Audio();
purr2.src = 'sound/purr2.mp3';
const purr3 = new Audio();
purr3.src = 'sound/purr3.mp3';

let character = document.getElementById('character');
let block = document.getElementById('block');
function jump() {
  if (character.classList != 'animate') character.classList.add('animate');
  setTimeout(function () {
    character.classList.remove('animate');
  }, 500);
}
let checkDead = setInterval(function () {
  let charecterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = 'none';
    block.style.display = 'none';
    alert('u lose');
  }
}, 10);
