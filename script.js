const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  let playerRoll = parseInt(prompt("Enter a number between 1-6"));
  while (1) {
    if (playerRoll > 0 && playerRoll < 7) break;
    playerRoll = parseInt(prompt("NOT ALLOWED\nEnter a number between 1-6"));
    console.log(playerRoll);
  }
  const computerRoll = Math.floor(Math.random() * 6);

  document.getElementById("playerDice").textContent = diceFaces[playerRoll - 1];
  document.getElementById("computerDice").textContent = diceFaces[computerRoll];

  if (playerRoll == computerRoll + 1) {
    document.querySelector("h3").innerText = "I Just Told You...";
    document.querySelector("button").remove();
    document.getElementById("result").innerHTML =
      "You Lose! 😞<br><br>NOW SEE THE CONSEQUENCE...";
    //setTimeout(window.close,4000);
    document.body.classList.add("flicker-effect");
  } else {
    document.getElementById("result").innerHTML =
      "It's Okay For Now!🏆<br><br>Close Call";
  }
  console.log(playerRoll, computerRoll);
  console.log("Hii");
}
