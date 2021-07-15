const player1 = prompt('Player1 enter your name: ', 'Player1')
const player2 = prompt('Player2 enter your name: ', 'Player2')
const fants = [
    'Поздороваться со всеми',
    'Сделать 10 отжиманий',
    'Рассказать анекдот',
    'Спеть песню',
    'Прочитать отрывок из книги',
    'Задание 100',
    'Задание 101',
    'Задание 102',
    'Задание 103',
    'Задание 104',
    'Задание 105',
    'Задание 106',
    'Задание 107',
    'Задание 108',
    'Задание 109',
    'Задание 110',
    'Задание 111',
]
let turn = player1

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min
}

alert(`${player1} starts first!`)

for (let i=0; i<fants.length; i++) {
    let randomFant = randomInt(1, fants.length)

    let res = confirm(`${i+1} - task for ${turn}: ${fants[randomFant]}`)
    console.log(randomFant)
    if (res) {
        turn = (turn === player2) ? player1 : player2
    }
}

