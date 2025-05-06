const title = [
    "Welcome",
    "Good Morning",
    "Have a nice day",
    "Nice outfit",
    "Hello World!",
    "Thankyou!"
];

const color = [
    "skyblue",
    "tomato",
    "gold",
    "pink",
    "lightgray",
    "aqua"
];

// ambil elemen
const TitleButton = document.getElementById('title');
const TitleColor = document.getElementById('color');
const Output = document.getElementById('ColorAndTitle');

// random
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// ganti judul
TitleButton.addEventListener('click', function() {
    let RandomTitle = getRandomItem(title);
    Output.textContent = RandomTitle;
});

// ganti warna
TitleColor.addEventListener('click', function() {
    let RandomColor = getRandomItem(color);
    Output.style.backgroundColor = RandomColor;
});

// reset
document.getElementById("reset").addEventListener("click", function () {
    const Output = document.getElementById("ColorAndTitle");
    Output.textContent = "hai";
    Output.style.backgroundColor = "#FFFCF9"
});