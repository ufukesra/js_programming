function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}

module.exports={
    square,cube
}

/**
 * In order to be able to use these functions in other files, we need to export them.
 * then import them in those files using require() function.
 */