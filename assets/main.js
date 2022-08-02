const colors = ['Red', 'IndianRed', 'LightCoral', 'Salmon', 'FireBrick',
    'Pink', 'HotPink', 'MediumVioletRed', 'PaleVioletRed',
    'Orange', 'Coral', 'Tomato', 'OrangeRed', 'DarkOrange',
    'Yellow', 'LemonChiffon', 'PapayaWhip', 'PeachPuff', 'Khaki', 'DarkBhahi',
    'Green', 'Chartreuse', 'LimeGreen', 'PaleGreen', 'MediumSpringGreen', 'SeaGreen', 'DarkGreen', 'OliveDrab', 'DarkSeaGreen', 'Teal',
    'Blue', 'Turquoise', 'PaleTurquoise', 'CadetBlue', 'SteelBlue', 'PowderBlue', 'SkyBlue', 'CornflowerBlue', 'RoyalBlue', 'MidnightBlue',
    'Purple', 'Lavender', 'Thistle', 'Orchid', 'MediumOrchid', 'MediumPurple', 'Indigo', 'DarkMagenta'];

(function () {
    document.querySelectorAll('.color').forEach(word => {
        word.innerText = getRandomColor()
        word.style.color = getRandomColor()
        word.addEventListener('mouseenter', randomizeAllColors)
        word.addEventListener('click', randomizeAllColors)
    })
    document.querySelector('button').addEventListener('click', randomizeAllColors)
})();

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}

function randomizeAllColors() {
    document.querySelectorAll('.color').forEach(word => {
        // word.innerText = getRandomColor() // too much?
        word.style.color = getRandomColor()
    })
}
