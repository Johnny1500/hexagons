import "./style.css";

let container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

let body = document.body;

let i: number = 0;
let marginTop = 3;

// let hex = document.createElement('div');
//     hex.classList.add('hexagon');
//     container.append(hex);

let timerId = setInterval(createHex, 1000);

setTimeout(() => clearInterval(timerId), 2000);

function createHex(): void {
  let hex = document.createElement("div");
  hex.classList.add("hexagon");

  console.log("i = ", i);
  console.log("marginTop =", marginTop);
  hex.style.marginTop = marginTop + "px";
  
  console.log(hex.style.marginTop);
  container.append(hex);
  if (i > 0) hex.style.marginLeft = -hex.clientWidth / 2 + "px";
  console.log("hex height = ", hex.clientHeight);
  i++;
  marginTop += hex.clientHeight * i + hex.clientWidth / (1.73 * 2) + 3;
}
