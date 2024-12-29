
//Array Methods
/**
 * push(element): Adds an element to the end of an array and returns the new length of the array.
 * unshift(element): Adds an element to the beginning of an array and returns the new length of the array.
 * splice(index, #of elements) : Remove the specified element starting from index
 * shift(): Removes the first element from an array and returns that element.
 * pop(): Removes the last element from an array and returns that element.
*/
let elements=['James', 'Jill', 'Bob', 'Alice', true,1,2,3,false,null,undefined];

console.log(elements.length);

console.log("------------------------------------");

let student=['James', 'Jill', 'Bob', 'Alice'];
console.log(student[2]);
console.log(student[3]);
student[2]='Breanna';
console.log(student);
console.log(student[2]);

console.log("------------------------------------");

let numbers=[1,2,3,4,5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);   
}

for (let element of numbers) {
    
    console.log(element);
}

console.log("------------------------------------");

let employees=['James', 'Jill', 'Bob', 'Alice'];
employees.push('David');
console.log(employees);
employees.unshift('Sara');
employees.unshift('Sara');
employees.unshift('Sara');
employees.unshift('Sara');
console.log(employees);
employees.splice(1, 3,);// remove elements from index 1 to 3 all included
console.log(employees);
employees.pop();
console.log(employees);

//Create an array of String and add 10 student names into it.
let students=['James', 'Jill', 'Bob', 'Alice'];
students.push('David');
students.push('Emily');
students.push('Sara');
students.push('Mike');
students.push('Sarah');

//print all the student names in normal order.
console.log("------------------------------------");
console.log("Normal Order: ");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);   
}

//print all the student names in reverse order.
console.log("Reverse Order:  ");
for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

// Set the last name as Ufuk.
console.log("------------------------------------");
students[students.length - 1] = 'Ufuk';
console.log(students);

console.log("------------------------------------");

let email= 'support@moonstar.com';
// Ckeck and verify the email address contains moonstar in the if statement
let domain = email.substring(email.indexOf('@')+1,email.lastIndexOf('.'));
console.log(domain);

if(domain ==='moonstar'){
    console.log('Email is valid');
}else{
    console.log('Email is invalid');
}


console.log("------------------------------------");

// Create an array and add 8 random numbers less then 100 into it then calculate sum and average.
let randomNumbers=[];
for (let i = 0; i < 8; i++) {
    let randomNumber=Math.floor(Math.random() * 100);
    randomNumbers.push(randomNumber);
}
console.log(randomNumbers);

// Calculate sum of the randomNumbers
let sum=0;
for (let i = 0; i < randomNumbers.length; i++) {
    sum+=randomNumbers[i];
}
console.log("Sum: ",sum);

// Find maximum and minimum numbers in randomNumbers


let min=randomNumbers[0];
let max=randomNumbers[0];
for (let i = 1; i < randomNumbers.length; i++) {
    if(randomNumbers[i]<min){
        min=randomNumbers[i];
    }
    if(randomNumbers[i]>max){
        max=randomNumbers[i];
    }
}

// Now print out the minimum and maximum numbers
console.log("Minimum: ",min);
console.log("Maximum: ",max);

// Find the average of the random numbers


let average=sum/randomNumbers.length;  
console.log("Average: ",average);

//Create an unsorted array of  10 numbers which are less than 1000 then sort it ascending order.
// Do not use any built-in sorting functions.


let unsortedNumbers=[100, 500, 300, 700, 200, 600, 400, 800, 900, 1000];
console.log("Unsorted Array: ",unsortedNumbers);

for (let i = 0; i < unsortedNumbers.length; i++) {
}

for (let i = 0; i < unsortedNumbers.length; i++) {
    for (let j = 0; j < unsortedNumbers.length - i - 1; j++) {
        if (unsortedNumbers[j] > unsortedNumbers[j + 1]) {
            let temp = unsortedNumbers[j];
            unsortedNumbers[j] = unsortedNumbers[j + 1];
            unsortedNumbers[j + 1] = temp;
        }
    }
}

console.log("Sorted Array: ",unsortedNumbers);








