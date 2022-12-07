const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// mouseenter = hover
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
// mouseleave = unhover
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));