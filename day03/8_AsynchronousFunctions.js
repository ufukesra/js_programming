
async function findElement(locator){

    return new Promise((resolve,reject)=>{

        if(locator==="valid-locator"){
            resolve("Element found");
        }else{
            reject("Element not found");
        }
    });

}

async function clickEmenet(locator){

    findElement(locator).then(()=>{
        console.log("Clicking the element");
    })
    .catch(()=>{
        console.log("Unable to click the element!");
    })
}

async function runTest(){  
    await clickEmenet("valid-locator"); // await keyword is used to wait for the promise to resolve before the below one executed
    await clickEmenet("invalid-locator");

}

