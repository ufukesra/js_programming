for (let i = 0; i < 2; i++) {
    console.log(i);
}

for (let i = 0; i < 2; i++) {
    console.log("Hello World!");
    console.log("Hello Programmers!");
    
}

console.log("-----------------------------------");
for (let i = 0; i < 5; i++) {

    console.log("Number: " + i);
    if(i ==3){
        break;
    }
}

console.log("-----------------------------------");


for (let i = 1; i <=10; i++) {
    if(i==5){

        continue;
    }

    console.log("Number: "+i)
}
//create a loop to print the numbers from 10 to 20
console.log("-----------------------------------");

for (let i = 10; i <= 20; i++) {
    console.log("Number: "+i)
}