function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

window.onload = function() {
    var elements = document.body.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        if (Math.random() < 0.2) {
            elements[i].classList.add('animated');
            elements[i].style.color = getRandomColor();
            var randomPosition = getRandomPosition();
            elements[i].style.position = "absolute";
            elements[i].style.top = randomPosition[0] + "px";
            elements[i].style.left = randomPosition[1] + "px";
        }
    }
};