// use querySelectorAll, since we are targeting more than 1 box
const boxes = document.querySelectorAll('.box');

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; // setting the limit at which the event will be triggered later

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

checkBoxes(); // makes visible those boxes that initially (prior to scrolling) fit into the viewport vertically

// On scrolling the window, trigger an event - the function checkBoxes, checking the positioning of each box
window.addEventListener('scroll', checkBoxes);