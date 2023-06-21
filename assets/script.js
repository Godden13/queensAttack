const btn = document.querySelectorAll('.btn')
const display = document.querySelector('.display')
const checkBtn = document.querySelector('.confirm');

const position = []

function checkClick () {
  let count = 0
  btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btn.style.background = 'brown'
      count += 1
      position.push([Math.floor((index) / 8) + 1, (index % 8)])
      if (count === 2) {
        alert('GAME OVER')
        btn.disabled = true
      }
      checkBtn.addEventListener('click', ()=>{
        getWinner(position)
      })
    })
  })
}

function getWinner (position) {
  if (position[0][0] === position[1][0] || position[0][1]  === position[1][1] || Math.abs(position[0][0] - position[1][0]) === Math.abs(position[0][1] - position[1][1])) {
    display.innerHTML= 'A Queen CAN attacked'
  } else {
    display.innerHTML = 'A Queen CANNOT attacked'
  }
}
checkClick()
