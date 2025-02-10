let yesButton = document.querySelector('.yes-btn');
let noButton = document.querySelector('.no-btn');
let scale = 1;

function chooseYes() {
    // Redirect to the "Happy Valentine's Day" page when Yes is clicked
    window.location.href = "happy-valentine.html";
}

function chooseNo() {
    // Increase the scale faster (by 0.2 instead of 0.1)
    scale += 0.2;
    yesButton.style.transform = `scale(${scale})`;

    // Gradually enlarge the button until it occupies most of the screen width
    if (scale >= 5) {
        // Once it's large enough, remove the No button (you can also hide it or just disable it)
        noButton.style.display = 'none';
    }
}
