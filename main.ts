input.onButtonPressed(Button.A, function () {
    password += 1
    basic.showNumber(password)
    if (password == 9) {
        password = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (password == 9 && password_2 == 0) {
        basic.showString("open")
    } else {
        basic.showString("lock")
    }
})
input.onButtonPressed(Button.B, function () {
    password_2 += 1
    basic.showNumber(password_2)
    if (password_2 == 9) {
        password_2 = 1
    }
})
let password_2 = 0
let password = 0
password = -1
password_2 = -1
