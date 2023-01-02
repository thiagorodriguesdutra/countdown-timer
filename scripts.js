const daysElement = document.querySelector('.days')
const hoursElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')


function countdown() {
    const currentTime = new Date()
    // partyDate defini o dia e a hora da festa
    const partyDate = new Date("Wed Oct 26 2023 00:00:00 GMT-0300")
    
    const diff = partyDate - currentTime
    const days = daysElement.innerText = Math.floor(diff / (86400 * 1000))
    const hours = hoursElement.innerText = Math.floor(diff / (60 * 60 * 1000) % 24)
    const minutes = minutesElement.innerText = Math.floor(diff / (60 * 1000) % 60) 
    const seconds = secondsElement.innerText = Math.floor(diff / 1000 % 60) 

    daysElement.textContent = days < 10 ? '0' + days : days
    hoursElement.textContent = hours < 10 ? '0' + hours : hours
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes
    secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds
}

setInterval(countdown, 1000)    