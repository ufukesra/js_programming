/* 
charAt(), toUpperCase(), toLowerCase(), lastIndexOf(), repeat(), endsWith(), startsWith(),
length, trim(), replace(), split(), includes(), indexOf(), substring()
*/

let schoolName = "Brookside High School";
console.log(schoolName.toLowerCase());
console.log(schoolName.toUpperCase());
console.log("Length: "+schoolName.length);
let lastIndexNumber=schoolName.length-1;
console.log("LastIndexNumber :"+lastIndexNumber);
console.log(schoolName.charAt(lastIndexNumber));
console.log("5th index number: "+schoolName[5]);

schoolName.toLocaleLowerCase(); // if you dont store it a new variable, it wont change the original string

console.log(schoolName);

console.log("----------------------------------");
let expectedText = 'JavaScript';
let actualText = 'javascript';

console.log( expectedText===actualText);
console.log(expectedText==actualText);

//In order to make these two string equal(ignore case), we can use toLowerCase() or toUpperCase()

console.log(expectedText.toLowerCase()===actualText.toLowerCase());


console.log("----------------------------------");

let s = "Hello, World!";
s.replace("World", "JavaScript");

console.log(s); // will still print "Hello, World!"
let s1=s.replace("World", "JavaScript");
console.log(s1); // will print "Hello, JavaScript!"

//replace Hello to Merhabe from the string s
console.log(s.replace("Hello", "Merhabe")); // will print "Merhabe, World!"

console.log("----------------------------------");

let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
let newStr= str.replace(/World/g, "JavaScript");
console.log(newStr); // will print "Hello, JavaScript!");

console.log("----------------------------------");

let str1 = "ABC34NDBHSK569BDSKB9475BCDSJ45890NJS";

let newStr2=str1.replace(/\d/g, "");// Replacing all digits with nothing
console.log(newStr2); // will print "ABCNDBHSKBDSKBDSJBCDSJ"


/*
Digits
To remove all digits from a string:
*/
const removeDigits = "Hello123World";
const result = removeDigits.replace(/\d/g, "");
console.log(result); // Output: "HelloWorld"


/*
Lowercase Letters
To remove lowercase letters:
javascript
*/

const removeLowercase = "JavaScript";
const resultLowercase = removeLowercase.replace(/[a-z]/g, "");
console.log(resultLowercase); // Output: "JavasCript"

/**
 * Special Characters
To remove special characters:
 */

const removeSpecialChars = "Hello@World!";
const resultSpecialChars = removeSpecialChars.replace(/[^a-zA-Z0-9]/g, "");
console.log(resultSpecialChars); // Output: "HelloWorld"

/**
 * Uppercase Letters
To remove uppercase letters:
*/

const removeUppercase = "JavaScript";
const resultUppercase = removeUppercase.replace(/[A-Z]/g, "");
console.log(resultUppercase); // Output: "avacrip"

/**
 * Whitespaces
To remove whitespaces:
 */ 
const removeWhitespaces = "Hello World";
const resultWhitespaces = removeWhitespaces.replace(/\s/g, "");
console.log(resultWhitespaces); // Output: "HelloWorld"

/**
 * Multiple Replacements
To replace multiple occurrences of a string:
 */

const replaceMultiple = "Hello123 @World!";
const resultMultiple = replaceMultiple.replace(/[\d\s@!]/g, "");
console.log(resultMultiple); // Output: "Merhabe World Merhabe World"


let characters = "JavaScript";

for (let i = 0; i < characters.length; i++) {
    console.log(characters[i]);
    
}

console.log("----------------------------------");

let email='spport@moonstar.com';
//Can you extract the domain name only from this email exclude .com?


let domain = email.substring(email.indexOf('@')+1,email.lastIndexOf('.'));


// let domain = email.split('@')[1];

// let domain = email.substring(email.lastIndexOf('@')+1 ,email.lastIndexOf('.'));
 console.log(domain);

 console.log("----------------------------------");

 let employeeName="Breanna";
 let employeeAge=25;

 console.log("Employee Name: "+employeeName);
 console.log(`Employee Name is ${employeeName} and Employee Age is ${employeeAge} years old.`)
 //If you wanna achieve above statement use backtick `` instead single and double quotes.

