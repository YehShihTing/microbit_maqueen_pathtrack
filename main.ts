function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            前進()
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            左轉()
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            右轉()
        } else {
            後退()
        }
    }
})
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
}
function 前進 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
basic.forever(function () {
	
})
