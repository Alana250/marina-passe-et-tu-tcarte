basic.showIcon(IconNames.Heart)
if (input.buttonIsPressed(Button.A)) {
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
}
if (input.buttonIsPressed(Button.B)) {
    basic.clearScreen()
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
}
if (input.buttonIsPressed(Button.AB)) {
    basic.clearScreen()
}
