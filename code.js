const title = [
    "hai",
    "hai dunia",
    "hai inuda",
    "hai adnui",
    "hai nudai",
    "hai udian",
    "hai naidu",
    "hai dunai",
    "hai naidu",
    "hai afdan"
];

const color = [
    "blue",
    "red",
    "yellow",
    "pink",
    "gray",
    "aqua",
];

// ambil elemen
const TitleButton = document.getElementById('title');
const TitleColor = document.getElementById('color');
const Output = document.getElementById('ColorAndTitle');

// random
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// anti judul
TitleButton.addEventListener('click', function() {
    const RandomTitle = getRandomItem(title);
    Output.textContent = RandomTitle;
});

// ganti warna
TitleColor.addEventListener('click', function() {
    const RandomColor = getRandomItem(color);
    Output.style.backgroundColor = RandomColor;
});
