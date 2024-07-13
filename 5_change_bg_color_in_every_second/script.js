// // start button

const start = document.querySelector('.start')

let randomColor = () => {
    let haxValues = '0123456789ABCDEF'
    let hax = '#'
    for (let i = 0; i < 6; i++) {
        hax += haxValues[(Math.floor(Math.random() * 16))] // -> Math.floor(Math.random() * 16) : gives 1 to 16 index
    }
    return hax
}

let stopSetIntervalId = null

start.addEventListener('click', () => {
    changeColor = () => {
        document.body.style.backgroundColor = randomColor()
    }
    stopSetIntervalId = setInterval(() => {
        changeColor();
    }, 1000)
})

// // stop button

const stop = document.querySelector('.stop')

stop.addEventListener('click', (e) => {
    clearInterval(stopSetIntervalId)
})