const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    search.classList.toggle('active'); // turn the 'active' class on and off
    input.focus(); // focus on the input field after click
})