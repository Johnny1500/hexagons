import './style.css';

let outerHex = document.createElement('div');
let innerHex = document.createElement('div');

outerHex.classList.add('hexagon');
innerHex.classList.add('hexagon');
innerHex.classList.add('inner');

document.body.append(outerHex);
outerHex.append(innerHex);