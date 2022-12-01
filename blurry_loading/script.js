// Define query selectors
const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

let load = 0; // initial counter value, the "step" for the changes in text opacity and img blur

// The function blurring() below will run at intervals of every 30 milliseconds
let int = setInterval(blurring, 30)

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
        // return; (also works instead of the clearInterval() function)
    }

    loadText.innerText = `${load}%`; // setting the txt equal to counter value
    // loadText.textContent = `${load}%`; (also works)
    loadText.style.opacity = scale(load /* the counter value */, 0, 100, 1, 0); // change the text opacity from 1 to 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // change the img blur from 30px to 0px
}