import "./style.css";

let container = document.createElement('div');
let outerHex = document.createElement('div');
let innerHex = document.createElement('div');

container.classList.add('container');
outerHex.classList.add('hexagon');
outerHex.classList.add('outer');
innerHex.classList.add('hexagon');
innerHex.classList.add('inner');

document.body.append(container);
container.append(outerHex);
outerHex.append(innerHex);
