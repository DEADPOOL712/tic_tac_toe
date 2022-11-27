const block = document.querySelectorAll(".grid-item");
const container = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const winLable = document.querySelector(".modal-win-label");

let count = 0;
let player;

close.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  for (let i = 0; i < block.length; i++) {
    block[i].innerHTML = "";
  }
});

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", function () {
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
      draw();
      win(player);
    }
  });
}
function draw() {
  let remain = 9;
  for (let i = 0; i < block.length; i++) {
    if (!(block[i].innerHTML == "")) {
      //   console.log(remain);
      remain--;
    }
    if (remain == 0) {
      overlay.classList.remove("hidden");
      modal.classList.remove("hidden");
      winLable.innerHTML = " Draw 🙌🏻 ";
    }
  }
}

function win(player) {
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
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    winLable.innerHTML = `The player ${player} Won 😍`;
  }
}
