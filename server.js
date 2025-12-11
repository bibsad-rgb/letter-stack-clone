function startGame() {
    document.getElementById("mysteryword").style.display = "flex"
    document.getElementById("startBtn").style.display = "none"
    // to test
   
}


possibleWords = [ 'WATERBENDER', 'ORANGES', 'RACECARS', 'CARROTS', 'PURPLE', 'HOUSES' ]


function showRandomWord() {
    let randomIndex = Math.round(Math.random() * possibleWords.length)
    let randomWord = possibleWords[randomIndex]

    wordLenght = randomWord.length
    console.log('Word:' , randomWord)
    console.log('Lenght', wordLenght)

    let random = Math.round(Math.random() * 3)
    //Trying to make a random number and then lets sy its 3 then we will use that number for taking from the left and right instead of having a random number from left and right which can mess up order
    // Use that random number so its take for example both 2 from the left and right 
    //Reason being so there is no overlap in the right/left taking which would cuase a letter in the middle to be missing making like wordle
    let num1 = randomWord.slice(0, (Math.round(Math.random() * 2)))
    let num2 = randomWord.slice(3, randomWord.length )
    console.log(num1)
        console.log(num2)

    if (wordLenght%2===0) {
        let num = 

        console.log("Even Lenght word")
        let number = (randomWord.length - (Math.round(Math.random() * 3)))
        let right = randomWord.slice(0, number)
        //starting from the 0 and going to a number will cuase those letters to stay and cut the letter not included
        //same logic for left if i start from a number and then go to word.lenght it will keep those leters and cut the ones not inlcde form the left. 
        // console.log(left) 

        // let y = (Math.round(Math.random() * 3))
        // console.log(y)

        let left = randomWord.slice((Math.round((Math.random() * 3))))
        let x = ((Math.round((Math.random() * 3))))
        console.log(x)
        console.log(right)


    }
    else {
        console.log('Odd Length word')
    }

    let wordd = "hello";
    console.log(wordd) 
    let number = (wordd.length-2)
    console.log(wordd.slice(0, number)) 
    console.log(number)


}
showRandomWord()

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
