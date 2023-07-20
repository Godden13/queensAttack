const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const checkBtn = document.querySelector(".confirm");
const reset = document.querySelector(".reset");
const position = [];

function checkClick() {
  let count = 0;
  btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.style.background = "brown";
      count += 1;
      position.push([Math.floor(index / 8) + 1, index % 8]);
      if (count === 2) {
        display.innerHTML = "GAME OVER, Click the check button to see if a Queen has been attacked";
        btn.disabled = true;
      }
      checkBtn.addEventListener("click", () => {
        getWinner(position);
      });
    });
  });
}

function getWinner(position) {
  if (
    position[0][0] === position[1][0] ||
    position[0][1] === position[1][1] ||
    Math.abs(position[0][0] - position[1][0]) ===
      Math.abs(position[0][1] - position[1][1])
  ) {
    display.innerHTML = "A Queen CAN be attacked";
  } else {
    display.innerHTML = "A Queen CANNOT be attacked";
  }
}

reset.addEventListener("click", () => {
  window.location.reload();
});

checkClick();
