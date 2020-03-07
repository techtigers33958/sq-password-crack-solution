// This is where we check if the number that we have
// guessed is correct.
//
//
// If the guess is not correct, incriment the number
// and resend.
radio.onReceivedString(function (receivedString) {
    if (receivedString == "YES") {
        basic.showIcon(IconNames.Yes)
    } else {
        number += 1
        radio.sendNumber(number)
    }
})
// Can be used to reset:
//
// - reset the number to 0
//
// - clears the screen
input.onButtonPressed(Button.B, function () {
    number = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// Sends the current number to the challenge.
//
// This can be used to both start the system and
// resume sending if the system does not receive the
// "NO".
//
//
// sometimes responses from the challenge are not read
// by the program, this is useful to resume the
// process
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(number)
})
let number = 0
radio.setGroup(40)
radio.sendString("START")
number = 0
basic.showIcon(IconNames.Diamond)
