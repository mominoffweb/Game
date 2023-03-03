const image = document.querySelector(".image")
const title = document.querySelector(".title")
const select = document.querySelector(".select")
const player1Title = document.querySelector(".player-one")
const player2Title = document.querySelector(".player-two")
const player1Btn = document.querySelector(".player-one-btn")
const player2Btn = document.querySelector(".player-two-btn")
const resetBtn = document.querySelector(".reset-btn")

let audio = new Audio ("sound/sound__music.mp3")
let  player1score = 0 
let  player2score = 0 
let  gameFinish = 5
let  gameOver  = false


function randomImage() {
    let random = Math.trunc (Math.random () * 5 + 1)
    image.src = `images/ping-pong-${random}.jpg`
}
randomImage()

      


player1Btn.addEventListener ("click", function () { 
    if(!gameOver)  {
    player1score++
     player1Title.textContent = player1score
     if(gameFinish == player1score) { 
        let audio = new Audio ("sound/sound__music.mp3")
        audio.play()   
        title.textContent= "player 1 win 🏆"
        player1Title.style.color = "green"
        player2Title.style.color = "red"
        gameOver = !gameOver 
     }
    }
})

player2Btn.addEventListener  ("click", function() {
    if(!gameOver) {
    player2score++
    player2Title.textContent = player2score 
    if(gameFinish  == player2score) {
        audio.play()
        player1Title.style.color = "red"
        player2Title.style.color = "green"
        gameOver = !gameOver 
       
      }
    } 
})



resetBtn.addEventListener("click", function () {
        title.textContent = " Stol Tennis"
        player1Title.style.color = ""
        player2Title.style.color = ""

        player1score = 0 
        player2score = 0          
        gameFinish = 5         
        gameOver  = false
        player1Title.textContent = player1score
        player2Title.textContent = player2score
        audio.pause()
        randomImage()
})