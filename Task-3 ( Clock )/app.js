setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secodsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secodsRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secodsRatio)
    setRotation(minuHand, minutesRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()