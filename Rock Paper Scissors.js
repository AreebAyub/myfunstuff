let games = {
  total: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};

computerChoose = 0;

function random(max) {
  return Math.floor(Math.random() * max);
}
function r() {
  let computer = random(3)
  if (computer === 0) {
    computerChoose = "✊";
    games.draws ++;
  }
  if (computer === 1) {
    computerChoose = "✋";
    games.losses ++;
  }
  else if (computer === 2) {
    computerChoose = "✌️";
    games.wins ++;
  }
  games.total ++;
  document.getElementById("scoring").innerHTML = `Games: ${games.total}<br>Wins: ${games.wins}<br>Draws: ${games.draws}<br>Losses: ${games.losses}`
  document.getElementById("choose").innerHTML = "You: ✊, Computer: " + computerChoose
}
function p() {
  let computer = random(3)
  if (computer === 0) {
    computerChoose = "✊";
    games.wins ++;
  }
  if (computer === 1) {
    computerChoose = "✋";
    games.draws ++;
  }
  else if (computer === 2) {
    computerChoose = "✌️";
    games.losses ++;
  }
  games.total ++;
  document.getElementById("scoring").innerHTML = `Games: ${games.total}<br>Wins: ${games.wins}<br>Draws: ${games.draws}<br>Losses: ${games.losses}`
  document.getElementById("choose").innerHTML = "You: ✋, Computer: " + computerChoose
}
function s() {
  let computer = random(3)
  if (computer === 0) {
    computerChoose = "✊";
    games.losses ++;
  }
  if (computer === 1) {
    computerChoose = "✋";
    games.wins ++;
  }
  else if (computer === 2) {
    computerChoose = "✌️";
    games.draws ++;
  }
  games.total ++;
  document.getElementById("scoring").innerHTML = `Games: ${games.total}<br>Wins: ${games.wins}<br>Draws: ${games.draws}<br>Losses: ${games.losses}`
  document.getElementById("choose").innerHTML = "You: ✌️, Computer: " + computerChoose
}