function init() {

  // Elements
  const startButton = document.querySelector('#start-button')
  const resetButton = document.querySelector('#reset-button')
  const buttons = document.querySelectorAll('.btns')
  const lives = document.querySelector('#lives')
  const score = document.querySelector('#score')
  const high = document.querySelector('#high-score')
  resetButton.disabled = true

  let mole
  let interval
  let currentScore = 0
  let currentLives = 3
  let highScore = 0
  let moleSpeed = 2000

  function getHighScore() {
    highScore = parseInt(localStorage.getItem('highScore')) || 0;
    console.log('highScore->', highScore)
    high.innerHTML = `${highScore}`
  }


  // Execution

  function randomCell() {
    const random = Math.ceil(Math.random() * 25)
    const selectedCell = document.querySelector(`#player :nth-child(${random})`)
    selectedCell.classList.add('mole') 
  }

  function moveMole() {
    const mole = document.querySelector('.mole')
    if (mole === null) {
      randomCell()
    } else {
      mole.classList.remove('mole')
      randomCell()
      currentLives = currentLives - 1
      
      if (currentLives === - 1) {
        window.alert(`Game Over!\n Final Score ${currentScore}`)
        endGame()
      } else {
        lives.innerHTML = `${currentLives}`
      }
    }
  }

  function startGame() {
    getHighScore()
    startButton.disabled = true
    resetButton.disabled = false
    lives.innerHTML = `${currentLives}`
    score.innerHTML = `${currentScore}`
    interval = setInterval(moveMole, moleSpeed)
  }


  function resetGame() {
    clearInterval(interval)
    currentLives = 3
    currentScore = 0
    moleSpeed = 2000
    buttons.forEach(btn => btn.classList.remove('mole'))
    startGame()
  }

  function endGame() {
    clearInterval(interval)
    if (currentScore > highScore) {
      window.alert(`New High Score! \n${currentScore}`)
      localStorage.setItem('highScore', currentScore)
      getHighScore()
    }
    startButton.disabled = false
    currentLives = 3
    currentScore = 0
    moleSpeed = 2000
    buttons.forEach(btn => btn.classList.remove('mole'))
  }

  function buttonClick(event) {
    console.log('cell clicked->', event.target)
    if (event.target.classList.contains('mole') ) {
      event.target.classList.remove('mole')
      currentScore = currentScore + 100
      score.innerHTML = `${currentScore}`
      if (moleSpeed > 300) {
        moleSpeed = (moleSpeed - 200)
      }
      console.log('moleSpeed->', moleSpeed)
      clearInterval(interval)
      console.log('interval cleared')
      interval = setInterval(moveMole, moleSpeed)
    } 
  }
  // Events
  startButton.addEventListener('click', startGame)
  resetButton.addEventListener('click', resetGame)
  buttons.forEach(btn => btn.addEventListener('click', buttonClick))
}

window.addEventListener('DOMContentLoaded', init)
// 