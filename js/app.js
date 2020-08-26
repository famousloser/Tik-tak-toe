const game = new Game();
const beginGame = document.getElementById("begin-game");
beginGame.addEventListener("click", function() {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
document.addEventListener("keydown", function(event) {
  game.handleKeydown(event);
});
