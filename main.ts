function doForward (text: string) {
    wuKong.setAllMotor(-100, -100)
}
function doRight (text: string) {
    wuKong.setAllMotor(-80, 0)
}
function doLeft (text: string) {
    wuKong.setAllMotor(0, -80)
}
basic.showIcon(IconNames.House)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        doForward("abc")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        doRight("abc")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        doLeft("abc")
    }
})
