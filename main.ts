input.onButtonPressed(Button.A, function () {
    tempo = 0
    iniciar = true
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    iniciar = false
    if (tempo == alvo) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Duck)
    }
    basic.showNumber(tempo)
    basic.showString("A - Inicia")
    basic.showString("B - Para")
    basic.showString("alvo: 12 ")
})
let iniciar = false
let tempo = 0
let alvo = 0
alvo = 12
tempo = 0
iniciar = false
basic.showString("A - Inicia")
basic.showString("B - Para")
basic.showString("alvo: 12 ")
basic.clearScreen()
basic.forever(function () {
    if (iniciar) {
        tempo += 1
        basic.pause(1000)
    }
})
