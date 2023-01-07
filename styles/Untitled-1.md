

Each cell is a div, with buttons inside of div. 
.mole adds background image in CSS


A start button should start the game...
  on click, start button sets lives = 3 and set score =0 starts setInterval

Every 2 seconds, a new 'mole' should appear in a random cell. When implementing, I recommend using a .mole class to add a mole to a cell. Style it how you wish!

  setInterval for 2 seconds that adds class .mole
  give each cell in grid a number, use Math.random() to randomly select one to add .mole to 
  
  const random = Math.floor(Math.random() * 26 )
  const selectedCell = document.querySelector('#player :nth-child(random)

If the player clicks the mole, the mole is removed, and the player gets 100 points.
hint: Think about what method we can use to check for classes on an element...

  on click, remove .mole class --> toggle class?
  check is cell has that class, if true   hasClass() 
  add +100 to score variable
  update innerHTML with new score

If the player doesn't click the mole in time, the mole disappears, and the player loses a life.

  event listener on the cell with the mole for click
  all buttons are disabled except for mole one, on click disable mole cell
  boolean to check if clicked is true or false
  if false total lives - 1 and remove .mole class


If 3 moles are not clicked in time, the game ends.

  start lives = 3, then - 1 one for each missed mole
  when lives = 0, clearInterval() 

When the game ends, alert the final score.

  when lives = 0 window. alert score and game over