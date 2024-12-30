
function getIntoCar(){
    return new Promise((resolve) => {
    
    console.log("Getting into the car");
    resolve();
    })
}

function startCar(){

    return new Promise((resolve) => {
    
    console.log("Starting the car");
    resolve();
    })
    
}

function drive(){

    return new Promise((resolve) => {

    console.log("Driving the car");
    resolve();
    })
}


getIntoCar()
    .then(() => startCar())
    .then(()=> drive())
    .catch((error) => {
        console.log("An error occurred: ", error);
    })
    .finally(() => {
        console.log("You reached the destination safely!");
    });
