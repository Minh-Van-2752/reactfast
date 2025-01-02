let btn = document.getElementById("btn");
let result = document.getElementById("result");
let times = document.getElementById("times");
let again = document.getElementById("again"); 
let isClicked = false;
let attempts = 10;
let tried = 0;
let max = 0; 
let results = 0;

function getRandomTime() {
  return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}

function startGame() {

  const randomTime = getRandomTime();

  setTimeout(() => {
    btn.style.backgroundColor = "hsl(120, 100%, 40%)";
    isClicked = true;

    setTimeout(() => {
      btn.style.backgroundColor = "hsl(0, 90%, 70%)";
      isClicked = false;
      startGame();
    }, 400);
  }, randomTime);
}

btn.addEventListener("click", () => {
  if(attempts <= max) {
    result.textContent = "Game over! You've used all your attempts!";
    times.textContent = `Result: ${results}/10`;
    btn.style.display = "none";
    again.style.display = "block";
    if(results >= 10){
    times.textContent = `Result: ${results}/${tried}`; 
  }
    return;
  }

  if(results >= 10){
    times.textContent = `Result: 10/10`; 
  }

  if (isClicked) {
    result.textContent = "You did it!";
    results++;
  } else if (!isClicked) {
    result.textContent = "You missed it!";
    attempts--;
  }

  tried++; 
  times.textContent = `Attempts: ${attempts}`;
});

again.addEventListener("click", () => {
  attempts = 10;
  isClicked = false;
  btn.style.display = "block";
  again.style.display = "none";
  result.textContent = "wait for green...";
  times.textContent = `Attempts: ${attempts}`;
  startGame();
});

btn.addEventListener("dblclick", () => {
  if(isClicked){
    results--;
  }
});

startGame();
