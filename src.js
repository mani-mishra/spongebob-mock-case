const toIronicCase = (str = "") => {
  return str
    .split("")
    .map(char =>
      Math.random(1) > 0.5 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
};

let outputElement = document.getElementsByClassName("result-area")[0];
let inputElement = document.getElementsByClassName("input-area")[0];

const handleInput = event => {
  const inputText = inputElement.value.trim();
  outputElement.innerText = toIronicCase(inputText);
};

inputElement.addEventListener("input", handleInput);
