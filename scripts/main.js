const fant = document.getElementById('fant')
const fantMessage = document.getElementById('fant-message')
const fantConfirm = document.getElementById('fant-confirm')
const fantPlayer = document.getElementById('fant-player')
const message = document.getElementById('message')
const fants = [
    'Поздороваться со всеми',
    'Сделать 10 отжиманий',
    'Рассказать анекдот',
    'Спеть песню',
    'Прочитать отрывок из книги',
    // 'Задание 100',
    // 'Задание 101',
    // 'Задание 102',
    // 'Задание 103',
    // 'Задание 104',
    // 'Задание 105',
    // 'Задание 106',
    // 'Задание 107',
    // 'Задание 108',
    // 'Задание 109',
    // 'Задание 110',
    // 'Задание 111',
]

const player1 = prompt('Player1 enter your name: ', 'Player1')
const player2 = prompt('Player2 enter your name: ', 'Player2')
let turn = player1


/* functions */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
/* end functions */

/* event listeners */
fantConfirm.addEventListener('click', function(){
    turn = (turn === player2) ? player1 : player2

    // let randomFantIndx = randomFant
    console.log( 'randomFant' + '-' + randomFant)
    console.log( 'length' + '-' + fants.length)
    fants.splice(randomFant, 1)

    randomFant = randomInt(0, fants.length)

    if (!fants[randomFant]) {
        fant.style.display = 'none'
        message.style.display = 'block'
        message.innerText = 'Game over'
    }

    fantPlayer.innerHTML = turn
    fantMessage.innerHTML = fants[randomFant]
})
/* end event listeners */

/* start game */
alert(`${player1} starts first!`)

fant.style.display = 'block'

let randomFant = randomInt(0, fants.length)
console.log( fants[randomFant])
fantPlayer.innerHTML = turn
fantMessage.innerHTML = fants[randomFant]

