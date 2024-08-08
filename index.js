const triesDisplay = document.getElementById('tries');
const mistakesDisplay = document.getElementById('mistakes');

const words = ["copa", "rosa", "lupa"];
let selectedWord = '';
let attempts = 0;
let maxAttempts = 5;


function randomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function randomWordOrder(words) {
    return words.split('').sort(() => 0.5 - Math.random()).join('');
}

document.getElementById("buttonrandom").addEventListener("click",function (){
    
const selectedWord = randomWord();
const randomLetter= randomWordOrder(selectedWord)

document.getElementById("wordInput").value = randomLetter;
})

window.onload = function() {
    const selectedWord = randomWord();
    const randomLetter = randomWordOrder(selectedWord);
    document.getElementById("wordInput").value = randomLetter;
};

document.getElementById("buttonreset").addEventListener("click", function() {
    clearInputs();
    document.getElementById("wordInput").value = '';
});


