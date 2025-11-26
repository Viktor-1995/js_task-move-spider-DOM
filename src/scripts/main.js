'use strict';

const wall = document.getElementsByClassName('wall');
const spider = document.getElementsByClassName('spider');

document.addEventListener('click', (e) => {
  const wallRect = wall[0].getBoundingClientRect();
  const spiderRect = spider[0].getBoundingClientRect();

  const spiderHalfW = spiderRect.width / 2;
  const spiderHalfH = spiderRect.height / 2;

  const clickX = e.clientX - wallRect.x;
  const clickY = e.clientY - wallRect.y;

  const targetLeft = clickX - spiderHalfW;
  const targetTop = clickY - spiderHalfH;

  if (e.target.closest('div').className) {
    spider[0].style.left = targetLeft + 'px';
    spider[0].style.top = targetTop + 'px';
  }
});
