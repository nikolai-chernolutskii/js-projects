// Bringing in the elements from the DOM
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); // will return a node list

// Index
let currentActive = 1;

function update() {
    // take the node list of circles and loop through those with an arrow function having the parameters of 'circle' and 'idx' (index) 
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active'); // select all the elements with the class 'active'

    // Get a percentage of the .progress width property
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

// Event listeners
next.addEventListener('click', () => {
    currentActive++; //Take the present currentActive and increment it by 1

    // Since we take circles as a node list, we can treat it as an array, so we use the length property to make sure that currentActive does not go over the length (meaning the amount of circles, in this case 4)
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--; //Take the present currentActive and decrement it by 1

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})