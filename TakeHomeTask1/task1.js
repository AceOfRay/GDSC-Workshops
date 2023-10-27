// gets the box element so that we can modify it
const box = document.getElementById('box');

// gets the button element so we can perform logic on click
const button = document.getElementById('changeButton');

// define an array of colors
const colors = ['red', 'green', 'blue']

// define a count for the function to cycle through
let i = 0;

// basically, on the click of this button, run this function
button.addEventListener('click', function changeColor() {
    if (i > 2) {
            i = 0;
        }
        // this line is using the element to change the  
        box.style.backgroundColor = colors[i];

        // increment the counter to get the next color
        i += 1;
});

//BONUS POINTS

//add a button that resets the color to the original color while also having the next click of a button show the first color in the array