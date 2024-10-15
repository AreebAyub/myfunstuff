let change = 0;
let changeTo = 0;
let score = 0;
let score1 = 0;
let score2 = 0;
let turn = 0;
let whichScore = 0;
const numWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let used = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function win(player) {
  if (document.getElementById("newGame").className !== "hide") {
    if (player === 1) {
      score1 ++;
    } else if (player === 2) {
      score2 ++;
    };
    document.getElementById("scores").innerHTML = `Scores: Player 1: ${score1}, Player 2: ${score2}`
    used = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < numWords.length; i ++) {
      change = document.getElementById(numWords[i]);
      change.innerHTML = "#";
      change.className = "no";
    };
    document.getElementById("newGame").className = "hide";
  };
};
function checkWin(first, second, third) {
  if (first.innerHTML === second.innerHTML && second.innerHTML === third.innerHTML) {
    first.className = "yippee";
    second.className = "yippee";
    third.className = "yippee";
    document.getElementById("newGame").className = "no";
    used = [1, 1, 1, 1, 1, 1, 1, 1, 1]
    if (first.innerHTML === "⭕") {
      whichScore = 1;
    } else {
      whichScore = 2;
    };
  };
};
function longIf() {
  if(document.getElementById("one").innerHTML !== "#" && document.getElementById("two").innerHTML !== "#" && document.getElementById("three").innerHTML !== "#" && document.getElementById("four").innerHTML !== "#" && document.getElementById("five").innerHTML !== "#" && document.getElementById("six").innerHTML !== "#" && document.getElementById("seven").innerHTML !== "#" && document.getElementById("eight").innerHTML !== "#" && document.getElementById("nine").innerHTML !== "#") {
    whichScore = 999;
    document.getElementById("newGame").className = "no";
  };
};
function one() {
  if (used[0] === 0) {
    change = document.getElementById("one")
    if (turn === 0){
      changeTo = "⭕";
    } else {
      changeTo = "❌";
    };
    change.innerHTML = changeTo;
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[0] = 1;
    longIf()
    checkWin(document.getElementById("one"), document.getElementById("two"), document.getElementById("three"));
    checkWin(document.getElementById("one"), document.getElementById("four"), document.getElementById("seven"));
    checkWin(document.getElementById("one"), document.getElementById("five"), document.getElementById("nine"));
  };
};
function two() {
  if (used[1] === 0) {
    change = document.getElementById("two")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[1] = 1;
    longIf()
    checkWin(document.getElementById("one"), document.getElementById("two"), document.getElementById("three"));
    checkWin(document.getElementById("two"), document.getElementById("five"), document.getElementById("eight"));
  };
};
function three() {
  if (used[2] === 0) {
    change = document.getElementById("three")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[2] = 1;
    longIf()
    checkWin(document.getElementById("three"), document.getElementById("one"), document.getElementById("two"));
    checkWin(document.getElementById("three"), document.getElementById("five"), document.getElementById("seven"));
    checkWin(document.getElementById("three"), document.getElementById("six"), document.getElementById("nine"));
  };
};
function four() {
  if (used[3] === 0) {
    change = document.getElementById("four")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[3] = 1;
    longIf()
    checkWin(document.getElementById("one"), document.getElementById("four"), document.getElementById("seven"));
    checkWin(document.getElementById("four"), document.getElementById("five"), document.getElementById("six"));
  };
};
function five() {
  if (used[4] === 0) {
    change = document.getElementById("five")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[4] = 1;
    longIf()
    checkWin(document.getElementById("one"), document.getElementById("five"), document.getElementById("nine"));
    checkWin(document.getElementById("two"), document.getElementById("five"), document.getElementById("eight"));
    checkWin(document.getElementById("three"), document.getElementById("five"), document.getElementById("seven"));
    checkWin(document.getElementById("four"), document.getElementById("five"), document.getElementById("six"));
  };
};
function six() {
  if (used[5] === 0) {
    change = document.getElementById("six")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[5] = 1;
    longIf()
    checkWin(document.getElementById("three"), document.getElementById("six"), document.getElementById("nine"));
    checkWin(document.getElementById("four"), document.getElementById("five"), document.getElementById("six"));
  };
};
function seven() {
  if (used[6] === 0) {
    change = document.getElementById("seven")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[6] = 1;
    longIf()
    checkWin(document.getElementById("seven"), document.getElementById("five"), document.getElementById("three"));
    checkWin(document.getElementById("seven"), document.getElementById("four"), document.getElementById("one"));
    checkWin(document.getElementById("seven"), document.getElementById("eight"), document.getElementById("nine"));
  };
};
function eight() {
  if (used[7] === 0) {
    change = document.getElementById("eight")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[7] = 1;
    longIf()
    checkWin(document.getElementById("two"), document.getElementById("five"), document.getElementById("eight"));
    checkWin(document.getElementById("seven"), document.getElementById("eight"), document.getElementById("nine"));
  };
};
function nine() {
  if (used[8] === 0) {
    change = document.getElementById("nine")
    if (turn === 0){
      change.innerHTML = "⭕";
    } else {
      change.innerHTML = "❌";
    };
    change.className = "used";
    turn = 1 - turn;
    document.getElementById("turnId").innerHTML = turn + 1;
    used[8] = 1;
    longIf()
    checkWin(document.getElementById("nine"), document.getElementById("six"), document.getElementById("three"));
    checkWin(document.getElementById("nine"), document.getElementById("five"), document.getElementById("one"));
    checkWin(document.getElementById("nine"), document.getElementById("eight"), document.getElementById("seven"));
  };
};