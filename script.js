//*********************
// variable declaration
//*********************

const block = document.querySelectorAll(".grid-item");
const container = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const winLable = document.querySelector(".modal-label-h1");
let count = 0;
let player;

//*********************
// Function declaration
//*********************

const mainGame = function (i) {
  if (block[i].innerHTML == "") {
    if (count % 2 == 0) {
      player = "X";
      block[i].style.color = "red";
    } else {
      player = "O";
      block[i].style.color = "blue";
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
    winLable.innerHTML = `The player "${player}" Won 😍`;
  }
};

const checkDraw = function () {
  let remain = 9;
  for (let i = 0; i < block.length; i++) {
    if (!(block[i].innerHTML == "")) {
      //   console.log(remain);
      remain--;
    }
    if (remain == 0) {
      showPopup();
      winLable.innerHTML = " Draw 🙌🏻 ";
    }
  }
};

const hidePopup = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showPopup = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

//***************
// Event listener
//***************

// game board event listen
for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", function () {
    mainGame(i);
  });
}

// pop up event listen
close.addEventListener("click", function () {
  hidePopup();
  for (let i = 0; i < block.length; i++) {
    block[i].innerHTML = "";
  }
  count = 0;
});
