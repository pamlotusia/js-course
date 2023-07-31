const currentPlayer = document.querySelector('.currentPlayer')

let selected
let player = 'X'
let playerIcon = document.getElementById('icon-player')
let nameIcon = playerIcon.alt

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

function init() {
  selected = []

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`

  document.querySelectorAll('.board button').forEach(item => {
    item.innerHTML = ''
    item.classList.remove('winner')
    item.classList.remove('velha')
    item.addEventListener('click', newMove)
  })
}

init()

function newMove(e) {
  const index = e.target.getAttribute('data-i')
  e.target.innerHTML = player
  e.target.removeEventListener('click', newMove)
  selected[index] = player

  setTimeout(() => {
    check()
  }, [100])

  //player = player === 'X' ? 'O' : 'X'
  if (player == 'X') {
    playerIcon.src = './images/hello-kitty-no-background.png'
    playerIcon.alt = 'Hello Kitty'
    player = 'O'
  } else {
    playerIcon.src = './images/my-melody-no-background.png'
    player = 'X'
  }

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`
}

function check() {
  let playerLastMove = player === 'X' ? 'O' : 'X'

  const items = selected
    .map((item, i) => [item, i])
    .filter(item => item[0] === playerLastMove)
    .map(item => item[1])

  for (pos of positions) {
    if (pos.every(item => items.includes(item))) {
      pos.forEach(item => {
        document.querySelector(`[data-i="${item}"]`).classList.add('winner')
      })

      setTimeout(() => {
        alert('O jogador ' + nameIcon + ' ganhou!')
        init()
      }, 100)

      return
    }
  }

  if (selected.filter(item => item).length === 9) {
    alert('Deu velha')
    init()

    return
  }
}