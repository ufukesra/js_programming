let score = 80;

if (score >= 60) {
  console.log("Cograts! You passed.");
}

let test = 50;
if (test >= 60) {
  console.log("Cograts! You passed");
} else {
  console.log("Sorry, you failed.");
}

let grade = 85;

if (grade >= 90) {
  console.log("Grade A");
} else if (grade >= 80) {
  console.log("Grade B");
} else if (grade >= 70) {
  console.log("Grade C");
} else if (grade >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}


console.log("--------------------------------   ");

score = -90;

if(score>=1 && score <=100){
    if (score >= 90) {
        console.log("Grade A");
      } else if (score >= 80) {
        console.log("Grade B");
      } else if (score >= 70) {
        console.log("Grade C");
      } else if (score >= 60) {
        console.log("Grade D");
      } else {
        console.log("Grade F");
      }
}else{
    console.log("Invalid score :"+score);
}
