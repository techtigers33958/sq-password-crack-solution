radio.onReceivedString(function (receivedString) {
    if (receivedString == "YES") {
        basic.showIcon(IconNames.Yes)
    } else {
        number += 1
        radio.sendNumber(number)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(number)
})
let number = 0
radio.setGroup(40)
radio.sendString("START")
number = 1
basic.showIcon(IconNames.Diamond)
