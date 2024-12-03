function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

let blockSize = 25;
let total_row = 20;
let total_col = 20;
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;
let speedY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

let foodCollected = 0;
let totalFood = 15;

window.onload = function () {
  board = document.getElementById("board");
  board.height = total_row * blockSize;
  board.width = total_col * blockSize;
  context = board.getContext("2d");

  placeSnake();
  placeFood();
  document.addEventListener("keyup", changeDirection);
  document
    .getElementById("restartButton")
    .addEventListener("click", restartGame);
  document.getElementById("closePopup").addEventListener("click", closePopup);
  setInterval(update, 1000 / 10);
};

function restartGame() {
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  speedX = 0;
  speedY = 0;
  snakeBody = [];
  gameOver = false;

  foodCollected = 0;
  updateProgressBar();

  placeSnake();
  placeFood();
}

function update() {
  if (gameOver) {
    return;
  }

  context.fillStyle = "green";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "yellow";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  //Placing new food once collected
  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    foodCollected++;
    updateProgressBar();
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "white";
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  if (
    snakeX < 0 ||
    snakeX > total_col * blockSize ||
    snakeY < 0 ||
    snakeY > total_row * blockSize
  ) {
    gameOver = true;
    showPopup("Game Over", "You hit the wall!");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      showPopup("Game Over", "You ran into yourself!");
    }
  }
}

function changeDirection(e) {
  if (e.code == "KeyW" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  } else if (e.code == "KeyS" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  } else if (e.code == "KeyA" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  } else if (e.code == "KeyD" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * total_col) * blockSize;
  foodY = Math.floor(Math.random() * total_row) * blockSize;
}

function placeSnake() {
  snakeX = Math.floor(Math.random() * (total_col - 2) + 1) * blockSize;
  snakeY = Math.floor(Math.random() * (total_row - 2) + 1) * blockSize;
}

function updateProgressBar() {
  let progress = (foodCollected / totalFood) * 100;
  let progressBar = document.getElementById("myBar");
  let progressText = document.getElementById("progressText");

  progressBar.style.width = progress + "%";
  progressText.textContent = Math.floor(progress) + "%";

  if (foodCollected >= totalFood) {
    showPopup("You Win!", "Congratulations! You collected all the food.");
    gameOver = true;
  }
}

function showPopup(title, message) {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const popupTitle = document.getElementById("popupTitle");
  const popupMessage = document.getElementById("popupMessage");

  popupTitle.textContent = title;
  popupMessage.textContent = message;

  popup.style.display = "block";
  overlay.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  popup.style.display = "none";
  overlay.style.display = "none";
}
