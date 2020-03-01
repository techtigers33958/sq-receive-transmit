function release_ball () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
radio.onReceivedNumber(function (receivedNumber) {
    let receivedNum = 0
    if (randomNumber == receivedNum * 7) {
        basic.showIcon(IconNames.Yes)
        release_ball()
    } else {
        basic.showIcon(IconNames.No)
        reset()
    }
})
function reset () {
    basic.pause(100)
    randomNumber = randomNumber
}
let randomNumber = 0
randomNumber = Math.randomRange(1, 100)
radio.setGroup(50)
radio.sendNumber(randomNumber)
