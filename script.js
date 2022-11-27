const block = document.querySelectorAll(".grid-item");
const winTitle = document.querySelector(".win-lable");
const container = document.querySelector(".grid-container");
let count = 0;
let player;

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", function () {
    winTitle.classList.add("hidden");
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
      console.log("draww");
      winTitle.classList.remove("hidden");
      winTitle.innerHTML = "Draw ! 🙌🏻";
      for (let i = 0; i < block.length; i++) {
        block[i].innerHTML = "";
      }
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
    winTitle.classList.remove("hidden");
    winTitle.innerHTML = "The player " + player + " Won ! 🏆";
    console.log(player + " win ");
    for (let i = 0; i < block.length; i++) {
      block[i].innerHTML = "";
    }
  }
}
