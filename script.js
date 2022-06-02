const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const newYear = '01 jan 2023'

function countdow() {
    const actualDate = new Date()
    const newYearDate = new Date(newYear)
    const base = Math.floor((newYearDate - actualDate) /1000)

    const day = Math.floor(base / 3600 / 24)
    const hours = Math.floor((base / 3600) % 24)
    const minutes = Math.floor((base / 60) % 60)
    const seconds = Math.floor(base % 60)

    daysEl.innerHTML = formatTime(day)
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
  
}

function formatTime(time) {
    return time<10?`0${time}` : time
}
setInterval(countdow, 1000)

countdow()