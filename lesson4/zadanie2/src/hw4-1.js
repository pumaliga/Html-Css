function name() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
    console.log(arguments.callee)
}

name('google', 10, false)
