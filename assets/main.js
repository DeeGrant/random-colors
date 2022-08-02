const colors = ['Red', 'IndianRed', 'LightCoral', 'Salmon', 'FireBrick',
    'Pink', 'HotPink', 'MediumVioletRed', 'PaleVioletRed',
    'Orange', 'Coral', 'Tomato', 'OrangeRed', 'DarkOrange',
    'Yellow', 'LemonChiffon', 'PapayaWhip', 'PeachPuff', 'Khaki', 'DarkBhahi',
    'Green', 'Chartreuse', 'LimeGreen', 'PaleGreen', 'MediumSpringGreen', 'SeaGreen', 'DarkGreen', 'OliveDrab', 'DarkSeaGreen', 'Teal',
    'Blue', 'Turquoise', 'PaleTurquoise', 'CadetBlue', 'SteelBlue', 'PowderBlue', 'SkyBlue', 'CornflowerBlue', 'RoyalBlue', 'MidnightBlue',
    'Purple', 'Lavender', 'Thistle', 'Orchid', 'MediumOrchid', 'MediumPurple', 'Indigo', 'DarkMagenta'];

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

(function () {
    document.querySelectorAll('p').forEach(p => {
        p.innerHTML = fillLorem()
    })

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

function fillLorem() {
    let ret = lorem.split(' ')
    const len = ret.length

    ret[Math.floor(Math.random()*len)] = fillSpan()
    ret[Math.floor(Math.random()*len)] = fillSpan()
    ret[Math.floor(Math.random()*len)] = fillSpan()

    return ret.join(' ')
}

function fillSpan() {
    return '<span class="color"></span>'
}
