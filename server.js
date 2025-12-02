function startGame() {
    document.getElementById("mysteryword").style.display = "flex"
    document.getElementById("startBtn").style.display = "none"
    // to test
    wordChooser()
}
let words = [
    {'AT':'BEATS'},
    {'RAN':'ORANGE'},
    {'ACE':'RACECAR'}
]
function wordChooser() {
    let randomIndex = Math.round(Math.random() * words.length)
    let choose = words[randomIndex]
    console.log(choose)
}

// NEXT STEPS

// How to get from B E A T S ==> _ A T _ _? Create a function for this
// Once we have blank spaces + given letters, show it on HTML
