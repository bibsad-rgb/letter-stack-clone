const possibleWords = [
    "BREAKFAST",
    "WATERMELON",
    "CLASSMATES",
    "STATEMENTS",
    "PLAYGROUND",
    "HEADPHONES",
    "MOUNTAINS",
    "CANDLELIGHT",
    "BOOKSHELF",
    "WONDERLAND"
];

function startGame() {
    const mystery = document.getElementById('mysteryword');
    mystery.innerHTML = ""; // Clear previous word - also 

    // Choose a random word
    const randomIndex = Math.floor(Math.random() * possibleWords.length);
    const randomWord = possibleWords[randomIndex];
    const wordLength = randomWord.length;

    // Decide middle size: randomly 3 or 4 letters
    let middleSize;
    if (Math.random() < 0.5) {
        middleSize = 3;
    } else {
        middleSize = 4;
    }

    // Make sure middleSize is not bigger than the word
    if (middleSize >= wordLength - 1) {
        middleSize = wordLength - 2;
    }

    const trim = Math.floor((wordLength - middleSize) / 2);

    const left = randomWord.slice(0, trim);
    const middle = randomWord.slice(trim, trim + middleSize);
    const right = randomWord.slice(trim + middleSize);

    // Left letters
    for (let i = 0; i < left.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.classList.add('letter-box');
        input.dataset.letter = left[i];
        input.addEventListener('input', checkLetter);
        mystery.appendChild(input);
    }

    // Middle letters
    const middleSpan = document.createElement('span');
    middleSpan.textContent = middle;
    middleSpan.id = "middle";
    mystery.appendChild(middleSpan);

    // Right letters
    for (let i = 0; i < right.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.classList.add('letter-box');
        input.dataset.letter = right[i];
        input.addEventListener('input', checkLetter);
        mystery.appendChild(input);
    }

    console.log('Word:', randomWord, 'Left:', left, 'Middle:', middle, 'Right:', right);

    // Update stats - had to do research on how to do
    document.querySelector(".stats p:nth-child(1)").textContent = "Letters: " + word.length;
    document.querySelector(".stats p:nth-child(2)").textContent = "Remaining at beginning: " + left.length;
    document.querySelector(".stats p:nth-child(3)").textContent = "Remaining at end: " + right.length;

    mystery.dataset.word = word;
}



//Alot of work and complicated - had to do research
function checkLetter(e) {
    const input = e.target;
    const mystery = document.getElementById('mysteryword');

    if (input.value.toUpperCase() === input.dataset.letter) {
        input.style.backgroundColor = 'green';
        input.disabled = true;
    } else {
        input.style.backgroundColor = '';
    }

    // Update remaining stats
    const inputs = mystery.getElementsByTagName('input');
    let remainingStart = 0;
    let remainingEnd = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].disabled) {
            if (i < Math.floor(inputs.length / 2)) remainingStart++;
            else remainingEnd++;
        }
    }
    document.querySelector(".stats p:nth-child(2)").textContent = "Remaining at beginning: " + remainingStart;
    document.querySelector(".stats p:nth-child(3)").textContent = "Remaining at end: " + remainingEnd;

    // Win check
    let allCorrect = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.toUpperCase() !== inputs[i].dataset.letter) {
            allCorrect = false;
            break;
        }
    }

    if (allCorrect && inputs.length > 0) {
        mystery.style.transform = "scale(1.1)";
        setTimeout(function () {
            mystery.style.transform = "scale(1)";
            startGame();
        }, 400);
    }
  }
  
// function showRandomWord() {
//     let randomIndex = Math.round(Math.random() * possibleWords.length)
//     let randomWord = possibleWords[randomIndex]

//     wordLength = randomWord.length
//     console.log('Word:' , randomWord)
//     console.log('Lenght', wordLength)

//     let middleSize;

//     if (wordLength%2 === 0) {
//         middleSize = 2; // even word show the middle 2 letter of the word
//     }
//     else {
//         middleSize = 3; // odd word and shows the 3 middle letter of the word
//     }

//     let amountTrim = Math.round((wordd.length - middleSize) /2)

//     //Split the word into segments, the left, right, and middle segments
//     let left = randomWord.slice(0, amountTrim)
//     let middle = randomWord.slice(amountTrim, amountTrim + middleSize)
//     let right = randomWord.slice(amountTrim + middleSize)

//     // Displayes the middle part of the word from the trimmed word. 
//     document.getElementById('middleDisplay').textContent = middle

//     //Filling in the blank for the left side
//     for (let i=0; i < left.length; i++) {
//         document.getElementById(`blank${i + 1}`).value = ""
//         document.getElementById(`blank${i + 1}`).dataset.letter = left[i]
//     }

//     for (let i = 0; i < right.length; i++) {
//         document.getElementById(`blank${i + 1 + left.length + middle.length}`).value = ""
//         document.getElementById(`blank${i + 1 + left.length + middle.length}`).dataset.letter = right[i]
//     }

//     // const middleSize = Math.random() < 0.5 ? 2 : 3;
//     // const trimAmount = Math.floor((wordLength - middleSize) / 2);

//     // // trim from left and right
//     // const middle = randomWord.slice(
//     //     trimAmount,
//     //     wordLength - trimAmount
//     // );

//     // console.log("Word:", randomWord);
//     // console.log("Middle section:", middle);

    

//     if (wordLenght%2===0) {
//         let random = Math.round(Math.random() * 2) + 1
//         //Trying to make a random number and then lets sy its 3 then we will use that number for taking from the left and right instead of having a random number from left and right which can mess up order
//         // Use that random number so its take for example both 2 from the left and right 
//         //Reason being so there is no overlap in the right/left taking which would cuase a letter in the middle to be missing making like wordle
//         let num1 = randomWord.slice(0, (random + 1))
//         let num2 = randomWord.slice((random +4) , randomWord.length)
//         console.log(num1)
//         console.log(num2)
        
        

//         // console.log("Even Lenght word")
//         // let number = (randomWord.length - (Math.round(Math.random() * 3)))
//         // let right = randomWord.slice(0, number)
//         //starting from the 0 and going to a number will cuase those letters to stay and cut the letter not included
//         //same logic for left if i start from a number and then go to word.lenght it will keep those leters and cut the ones not inlcde form the left. 
//         // console.log(left) 

//         // let y = (Math.round(Math.random() * 3))
//         // console.log(y)

//         // let left = randomWord.slice((Math.round((Math.random() * 3))))
//         // let x = ((Math.round((Math.random() * 3))))
//         // console.log(x)
//         // console.log(right)


//     }
//     else {
        
//     }

//     let wordd = "hello";
//     console.log(wordd) 
//     let number = (wordd.length-2)
//     console.log(wordd.slice(0, number)) 
//     console.log(number)


// }
// showRandomWord()

// // function wordChooser() {
// //     let randomIndex = Math.round(Math.random() * possibleWords.length)
// //     let choose = possibleWords[randomIndex]
// //     console.log(choose)
// //     // let key = (possibleWords[randomIndex])[0]
// //     console.log(possibleWords[randomIndex])
// //     console.log(possibleWords[randomIndex])

// // }

// // function showWordPuzzle() {

// // }

// // NEXT STEPS

// // How to get from B E A T S ==> _ A T _ _? Create a function for this
// // Once we have blank spaces + given letters, show it on HTML
