
/**
 * Exceptions:
 *   Eval Error
 *   Internal Error
 *   Type Error
 *   URI Error
 *   Reference Error
 *   Syntax Error
 */
console.log("Test Started here");

try{


console.log(object);
}catch(e){
    console.log('An error occurred: ');
    //console.log(e);
}finally{
    console.log("Error handling completed successfully! ");
}
console.log("Test ended here");

console.log("------------------------------");

console.log("New Test Started here");
throw new Error("Throwing a new error because something went wrong in test");
console.log("Test ended here");