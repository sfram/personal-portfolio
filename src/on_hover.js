function hover(element, png) {
    element.setAttribute('src', 'assets/' + png + '_hover.png');
}
function unhover(element, png) {
    element.setAttribute('src', 'assets/' + png + '.png');
}