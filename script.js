const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?","/"];

let passwordEl = document.getElementById("passwordButton-el")
let passwordFieldOneEl = document.getElementById("passwordOne-el")
let passwordFieldTwoEl = document.getElementById("passwordTwo-el")


function passwordButton() {
    passwordFieldOneEl.value = ""
    passwordFieldTwoEl.value = ""
    for (let i = 0; i < characters.length && i < 15; i++) {
    let randomPasswordOne = Math.floor(Math.random() * characters.length)
    let randomPasswordTwo = Math.floor(Math.random() * characters.length)
    passwordFieldOneEl.value += characters[randomPasswordOne]
    passwordFieldTwoEl.value += characters[randomPasswordTwo]
    }
}

function copyPasswordOne() {
    var copyText = document.getElementById("passwordOne-el")
    copyText.select()
    copyText.setSelectionRange(0, 99999) // For mobile devices
    navigator.clipboard.writeText(copyText.value)
    window.getSelection().removeAllRanges()
}

function copyPasswordTwo() {
    var copyText = document.getElementById("passwordTwo-el")
    copyText.select()
    copyText.setSelectionRange(0, 99999) // For mobile devices
    navigator.clipboard.writeText(copyText.value)
    window.getSelection().removeAllRanges()
}

window.addEventListener('focus', function() {
    var copyText = document.getElementById("passwordOne-el")
    var copyText = document.getElementById("passwordTwo-el")
    copyText.setSelectionRange(0, 0)
})