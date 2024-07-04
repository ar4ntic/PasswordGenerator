const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?","/"];


let passwordEl = document.getElementById("passwordButton-el")

console.log(passwordEl)

function passwordButton() {
    console.log("Clicked")
}


const copyButton1 = document.getElementById("copyButton1");
const copyButton2 = document.getElementById("copyButton1");

const passwordField1 = document.getElementById("password1");
const passwordField2 = document.getElementById("password2");

copyButton1.addEventListener("click", function() {
    // Select the text inside the input field
    passwordField1.select();
    passwordField1.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Optionally, provide some visual feedback
    copyButton1.classList.add("copied"); // Example: Add a class for visual feedback
    setTimeout(() => {
        copyButton1.classList.remove("copied"); // Reset the class after a delay
    }, 1500); // Reset after 1.5 seconds
});

copyButton2.addEventListener("click", function() {
    // Select the text inside the input field
    passwordField2.select();
    passwordField2.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Optionally, provide some visual feedback
    copyButton2.classList.add("copied"); // Example: Add a class for visual feedback
    setTimeout(() => {
        copyButton2.classList.remove("copied"); // Reset the class after a delay
    }, 1500); // Reset after 1.5 seconds
});
