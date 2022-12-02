//*********************
// variable declaration
//*********************

const block = document.querySelectorAll(".grid-item");
const container = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const winLable = document.querySelector(".modal-label-h1");
// const xScore = document.querySelector(".x-score");
// const oScore = document.querySelector(".o-score");
let count = 0;
let player;

//*********************
// Function declaration
//*********************

const mainGame = function (i) {
  if (block[i].innerHTML == "") {
    if (count % 2 == 0) {
      player = "O";
      block[i].style.color = "#b67cff";
    } else {
      player = "X";
      block[i].style.color = "#98ffd9";
    }

    block[i].innerHTML = player;
    count++;
    checkDraw();
    checkWin(player);
  }
};

const checkWin = function (player) {
  if (
    (block[0].innerHTML == player &&
      block[1].innerHTML == player &&
      block[2].innerHTML == player) ||
    (block[0].innerHTML == player &&
      block[3].innerHTML == player &&
      block[6].innerHTML == player) ||
    (block[0].innerHTML == player &&
      block[4].innerHTML == player &&
      block[8].innerHTML == player) ||
    (block[1].innerHTML == player &&
      block[4].innerHTML == player &&
      block[7].innerHTML == player) ||
    (block[2].innerHTML == player &&
      block[5].innerHTML == player &&
      block[8].innerHTML == player) ||
    (block[2].innerHTML == player &&
      block[4].innerHTML == player &&
      block[6].innerHTML == player) ||
    (block[3].innerHTML == player &&
      block[4].innerHTML == player &&
      block[5].innerHTML == player) ||
    (block[6].innerHTML == player &&
      block[7].innerHTML == player &&
      block[8].innerHTML == player)
  ) {
    showPopup();
    // score(player);
    winLable.innerHTML = `The player "${player}" Won 😍`;
  }
};

const checkDraw = function () {
  let remain = 9;
  block.forEach(function (ele, index) {
    if (!(ele.innerHTML == "")) {
      remain--;
    }
    if (remain == 0) {
      showPopup();
      winLable.innerHTML = " Draw 🙌🏻 ";
    }
  });
};

const hidePopup = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showPopup = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

// const score = function (player) {
//   let score;
//   const playerScore = player === "X" ? xScore : oScore;
//   // change html
//   score = Number(playerScore.innerHTML);
//   score += 1;
//   playerScore.innerHTML = score;
// };
//***************
// Event listener
//***************

// game board event listen
block.forEach(function (ele, index) {
  ele.addEventListener("click", function () {
    mainGame(index);
  });
});

// pop up event listen
close.addEventListener("click", function () {
  hidePopup();
  block.forEach(function (element) {
    element.innerHTML = "";
  });
  count = 0;
});
