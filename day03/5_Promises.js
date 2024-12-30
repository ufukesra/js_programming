
let checkEligibleToVote= (age)=>{
   
   return new Promise((resolve, reject) =>{
    if(age>=18){
       resolve("Eligible to vote");
    }else{
       reject("Not eligible to vote");
    }
   })
}

checkEligibleToVote(21)
  .then(() => {
    console.log("You can vote for joe or trump");
  }) 
  .catch(() => {
    console.log("You can not vote today");
  })

  /**
   * Promises can help us avoid using:
   *   Nested callbacks,
   *   Callback hell,
   */