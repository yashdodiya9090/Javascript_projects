let time = document.querySelector('.time')

let showTime = setInterval(() => {
    let date = new Date()
    let timeInHourMinSecForm = date.toLocaleTimeString()
    time.innerHTML = timeInHourMinSecForm
}, 1000)
