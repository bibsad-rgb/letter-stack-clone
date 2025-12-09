function startGame() {
    document.getElementById("mysteryword").style.display = "flex"
    document.getElementById("startBtn").style.display = "none"
    // to test
   
}


possibleWords = [ 'BEATS', 'ORANGE', 'RACECAR', 'CARROT', 'PURPLE' ]

let randomIndex = Math.round(Math.random() * possibleWords.length)
let randomWord = possibleWords[randomIndex]
console.log(randomWord)

function showRandomWord() {
    
}

// function wordChooser() {
//     let randomIndex = Math.round(Math.random() * possibleWords.length)
//     let choose = possibleWords[randomIndex]
//     console.log(choose)
//     // let key = (possibleWords[randomIndex])[0]
//     console.log(possibleWords[randomIndex])
//     console.log(possibleWords[randomIndex])

// }

// function showWordPuzzle() {

// }

// NEXT STEPS

// How to get from B E A T S ==> _ A T _ _? Create a function for this
// Once we have blank spaces + given letters, show it on HTML
