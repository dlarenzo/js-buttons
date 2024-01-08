const largeRedButton = document.querySelector('.large-red-button'); 

const clicks = document.querySelector('#clicks');
let i = 0; 


/* Button Increase */
largeRedButton.addEventListener("click" , btnPressed(i));


function btnPressed() {
  clicks.innerText = i++;
}

console.log(rangeRed.value);

/* Range Slider */



function changeColor() {
  let red = document.querySelector('#rangeRed').value;
  let green = document.querySelector('#rangeGreen').value;
  let blue = document.querySelector('#rangeBlue').value;

  let color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = color;
  document.querySelector('#colorOutput').innerHTML = color;
}

document.querySelector('#rangeRed').addEventListener('input',changeColor);
document.querySelector('#rangeGreen').addEventListener('input',changeColor);
document.querySelector('#rangeBlue').addEventListener('input',changeColor);

