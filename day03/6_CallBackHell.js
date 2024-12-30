
function getIntoCar(callback){
    console.log("Getting into the car");
    callback();
}

function startCar(callback){
    console.log("Starting the car");
    callback();
}

function drive(callback){
    console.log("Driving the car");
    callback();
}

//In or der to drive the car:
//The below statement is called callback hell
getIntoCar(function(){
    startCar(function(){
        drive(function(){
            console.log("Car has been driven");
        })
    })
} );