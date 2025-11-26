'use strict';

const wall = document.getElementsByClassName('wall');
const spider = document.getElementsByClassName('spider');

document.addEventListener('click', (e) => {
  const wallRect = wall[0].getBoundingClientRect();
  const spiderRect = spider[0].getBoundingClientRect();

  const spiderHalfW = spiderRect.width / 2;
  const spiderHalfH = spiderRect.height / 2;

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let targetLeft = clickX - spiderHalfW;
  let targetTop = clickY - spiderHalfH;

  const maxLeft = wallRect.width - spiderRect.width - 20;
  const maxTop = wallRect.height - spiderRect.height - 20;

  targetLeft = Math.max(0, Math.min(targetLeft, maxLeft));
  targetTop = Math.max(0, Math.min(targetTop, maxTop));

  if (e.target.closest('.wall')) {
    spider[0].style.left = targetLeft + 'px';
    spider[0].style.top = targetTop + 'px';
  }
});
