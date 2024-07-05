let characters = {
    letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
}

let passwordEl = document.getElementById("passwordButton-el")
let passwordFieldOneEl = document.getElementById("passwordOne-el")
let passwordFieldTwoEl = document.getElementById("passwordTwo-el")

function passwordButton() {
  passwordFieldOneEl.value = ""
  passwordFieldTwoEl.value = ""

  let includeSymbols = document.getElementById("symbolsToggle").checked
  let includeNumbers = document.getElementById("numbersToggle").checked

  let availableCharacters = []
  for (let i = 0; i < characters.letters.length; i++) {
    availableCharacters.push(characters.letters[i])
  }
  if (includeNumbers) {
    for (let i = 0; i < characters.numbers.length; i++) {
      availableCharacters.push(characters.numbers[i])
    }
  }
  if (includeSymbols) {
    for (let i = 0; i < characters.symbols.length; i++) {
      availableCharacters.push(characters.symbols[i])
    }
  }

  for (let i = 0; i < 15; i++) {
    let randomPasswordOne = Math.floor(
      Math.random() * availableCharacters.length
    );
    let randomPasswordTwo = Math.floor(
      Math.random() * availableCharacters.length
    );
    passwordFieldOneEl.value += availableCharacters[randomPasswordOne]
    passwordFieldTwoEl.value += availableCharacters[randomPasswordTwo]
  }
}

// Copy password function
function copyPasswordOne() {
  let copyText = document.getElementById("passwordOne-el")
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices
  navigator.clipboard.writeText(copyText.value)
  window.getSelection().removeAllRanges()
}

function copyPasswordTwo() {
  let copyText = document.getElementById("passwordTwo-el")
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices
  navigator.clipboard.writeText(copyText.value)
  window.getSelection().removeAllRanges() // Removes the focus highlight after copy
}


// Removes the focus highlight after returning to browser
window.addEventListener("focus", function () {
  let copyTextOne = document.getElementById("passwordOne-el")
  let copyTextTwo = document.getElementById("passwordTwo-el")
  copyTextOne.setSelectionRange(0, 0)
  copyTextTwo.setSelectionRange(0, 0)
});