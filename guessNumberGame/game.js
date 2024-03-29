//? random sayı üretelim
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//?variables
let score = 10;
// let topScore = 0;

let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textcontent = topScore;


//? check butonuna basıldığında
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  if (!guessInput) {
    msg.innerText = "Please enter a NUMBER";
  } else if (guessInput === randomNumber) {
    msg.innerHTML = `Congratulations YOU WİN <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    body.className = "bg-primary"; //* bu bootstrap style yapmak
    // body.style.background = "lightgreen"; //* ikiside olur bu normal
    if (score > topScore) {
      // topScore = score;
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
  }
  
  document.querySelector(".secret-number").textContent = randomNumber;
  }else{
    score--;
    if(score > 0){
      guessInput > randomNumber 
      ? (msg.innerHTML = ` <i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE`) 
      : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE`);
    }else{
      msg.innerHTML = `You LOST <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }
    document.querySelector(".score").textContent = score;
  }
});

//?again tuşuna basıldığında

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random()*100);
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").classList.remove("bg-primary", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting...";
})

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if(e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
})
