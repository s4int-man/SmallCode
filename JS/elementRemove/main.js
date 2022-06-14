const button = document.querySelector("button");

let example = document.querySelector(".example");
example.remove();
example = null;

console.log(button.parentElement);