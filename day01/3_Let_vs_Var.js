let school ="Brookside";
console.log(school);

//let school= "Something"; // this will give error as variable name is redeclared.

if(school === "Brookside"){
    let a = 100;
}

//console.log(a);//this will give error as variable a is not defined outside the if block.

console.log('--------------------------------');

var country= "United States";
var country= "United Kingdom";//var: variable name can be duplicated during the declaration.

console.log(country);
if(true){
    var a=200;
}

console.log(a);

//So the var variable is visible out of the block like if statement above;
//But let and const are block-scoped variables. can not be visible outside the if block