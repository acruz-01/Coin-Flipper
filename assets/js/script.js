// TODO: Declare any global variables we need
let flipOutcome = 0;
let headsPercent = 0;
let tailsPercent = 0;
let headsCount = 0;
let tailsCount = 0;
let flipTotal = 0;

let btnFlip = document.querySelector('#flip');
let btnClear = document.querySelector('#clear');
let imgPenny = document.querySelector('#penny-image');


document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    btnFlip.addEventListener('click', function (){
         // TODO: Determine flip outcome

        flipOutcome = Math.random() < 0.5

        if (flipOutcome) {
            // TODO: Update image and status message in the DOM
            document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg';
            document.querySelector('#message').textContent = 'You Flipped Heads!';
            
            // Add one to the count of number of heads flipped
            headsCount++;

        } 
        else {
            document.querySelector('#penny-image').src = 'assets/images/penny-tails.jpg';
            document.querySelector('#message').textContent = 'You Flipped Tails!';

            // Add one to the count of number of tails flipped
            tailsCount++;
        } 
        // Calculate the total number of flips
        flipTotal = headsCount + tailsCount;

        if (flipTotal > 0) {
            headsPercent = Math.round((headsCount / flipTotal) * 100);
            tailsPercent = Math.round((tailsCount / flipTotal) * 100);
        }

        // Update the scoreboard
        document.querySelector('#heads').textContent = headsCount;
        document.querySelector('#heads-percent').textContent = headsPercent + '%';
        document.querySelector('#tails').textContent = tailsCount;
        document.querySelector('#tails-percent').textContent = tailsPercent + '%';
        }
    )       
})

btnClear.addEventListener('click', function () {
    headsCount = 0;
    tailsCount = 0;
    headsPercent = 0;
    tailsPercent = 0;

    document.querySelector('#message').textContent = 'Let\'s Get Rolling!'

    document.querySelector('#heads').textContent = headsCount;
    document.querySelector('#heads-percent').textContent = headsPercent + '%'
    document.querySelector('#tails').textContent = tailsCount;
    document.querySelector('#tails-percent').textContent = tailsPercent + '%'
    console.log(headsPercent);
    console.log(tailsCount);
    console.log(tailsPercent);
})

// Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)