const lengthp = document.querySelector("#length-number");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const passInput = document.querySelector("#pass-input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

console.log(lengthp.value);
console.log(upperCase.checked);
console.log(lowerCase.checked);
console.log(numbers.checked);
console.log(symbols.checked);

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberstr = "0123456789";
const symbolstr = "!@#$%^&*()_+=-{}[]|;:,.<>/?";
generate.addEventListener("click", () => {
  let str = "";
  if (upperCase.checked) {
    str += upperCaseLetters;
  }

  if (lowerCase.checked) {
    str += lowerCaseLetters;
  }

  if (numbers.checked) {
    str += numberstr;
  }

  if (symbols.checked) {
    str += symbolstr;
  }
  console.log(str);
  let password = "";
  for (let i = 0; i < lengthp.value; i++) {
    console.log(str.length, "str.length");
    let index = Math.floor(Math.random() * str.length);
    console.log(index, "index");
    console.log("Math.random() ", Math.random());
    console.log("Math.random()*str.length", Math.random() * str.length);
    password += str[index];
  }
  console.log(password);
  passInput.value = password;
});

copy.addEventListener("click", () => {
  if (passInput.value === "") {
    alert("Please Generate Password First");
  } else {
    const newele = document.createElement("textarea");
    newele.value = passInput.value;
    document.body.appendChild(newele);
    newele.select();
    passInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
    newele.remove();
  }
});
