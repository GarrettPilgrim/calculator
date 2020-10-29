function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate() {
  
}

//Stores user input based on button clicked
const btns = document.querySelectorAll("button");
const display = document.querySelector(".display");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userInput =
      btn.id == "clear"
        ? (display.textContent = "")
        : (display.textContent = parseInt(btn.id));
    
  });
});

function input() {

}
