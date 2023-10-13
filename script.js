const display = document.querySelector(".number");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

let value = 0;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

function increment() {
  value += 1;
  display.textContent = value;
  display.style.color = "green";
}

function decrement() {
  value -= 1;
  display.textContent = value;
  display.style.color = "red";
}

function reset() {
  value = 0;
  display.textContent = value;
  display.style.color = "black";
}
