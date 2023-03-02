const btn = document.querySelectorAll('button')
const display = document.querySelector('.display')

const position = []

function checkClick () {
  let count = 0
  btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      count += 1
      position.push([Math.floor((index) / 8) + 1, (index % 8)])
      if (count === 2) {
        alert('GAME OVER')
        btn.disabled = true
        getWinner(position)
      }
    })
  })
}

function getWinner (position) {
  if (position[0][0] === position[1][0] || position[0][1]  === position[1][1] || Math.abs(position[0][0] - position[1][0]) === Math.abs(position[0][1] - position[1][1])) {
    display.innerHTML= 'A Queen Was attacked'
  } else {
    display.innerHTML = 'A Queen was NOT attacked'
  }
}
checkClick()
