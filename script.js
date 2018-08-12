// Globals
let isPlaying
let time = 10
let score = 0
let currentWord
let firstPress = 0

// DOM Elements
const inputForm = document.getElementById('inputForm')
const targetWord = document.getElementById('targetWord')
const wordInput = document.getElementById('wordInput')
const counterOutput = document.getElementById('counterOutput')
const scoreOutput= document.getElementById('scoreOutput')
const highscore = document.getElementById('highscore')
const msg = document.getElementById('msg')
const startAud = document.getElementById('startAud')
const endAud = document.getElementById('endAud')


const words = [
    'Great',
    'What',
    'Yes',
    'Amazing',
    'Significant',
    'Word',
    'Awesomeness',
    'Sick',
    'Physics'
]

window.addEventListener('load', loadWord(words))
window.onkeypress = (e)=>{if(e.keyCode === 13){start()}}
wordInput.addEventListener('keydown', match)

function start() {
    if(firstPress === 0){
        startAud.play()
        msg.innerHTML = ""
        wordInput.value = ""
        isPlaying = true
        countDown()
        firstPress++
    }
}

function match() {
    currentWordLowerCase = currentWord.toLowerCase()
    wordInputLowerCase = wordInput.value.toLowerCase()
    if(wordInputLowerCase === currentWordLowerCase  && isPlaying){
        loadWord(words)
        score++
        scoreOutput.innerHTML = score
        wordInput.value = null
    }
}

function countDown() {
    console.log('Countdown Started...')
    let interval = setInterval(function() {
        if(time > 0 && isPlaying){
            time--
            counterOutput.innerHTML = time
        }else {
            endAud.play()
            clearInterval(interval)
            msg.innerHTML = 'Game Over!'
            reset()
        }
    },1000)
}

inputForm.onsubmit = function(e) {
    e.preventDefault()
}

function loadWord(words) {
    Math.floor()
    randomIndex = Math.floor(Math.random() * words.length)
    currentWord = words[randomIndex]
    targetWord.innerHTML = currentWord
}

function reset() {
    console.log('Game Reset...')
    isPlaying = false
    scoreOutput.innerHTML = score
    firstPress = 0
    time = 10
    wordInput.blur()
    wordInput.value = ""
    if(score > highscore.innerHTML){
        highscore.innerHTML = score
        score = 0
    }else{
        score = 0
    }
}
