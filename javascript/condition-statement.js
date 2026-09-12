//if else conditional statement
let mark = 75;

if (mark >= 80) {
  console.log("A+");
} 
else if (mark >= 70) {
  console.log("A");
} 
else if (mark >= 60) {
  console.log("B");
} 
else if (mark >= 50) {
  console.log("C");
} 
else if (mark >= 40) {
  console.log("D");
} 
else {
  console.log("Fail");
}
//switch statemant
let marks = 80;

switch (marks/10) {
  case 10:
  case 9:
  case 8:
    console.log("A+");
    break;

  case 7: 
    console.log("A");
    break;

  case 6:
    console.log("B");
    break;
case 5:
    console.log("C");
    break;
case 4:
    console.log("D");
    break;

  default:
    console.log("Fail");
}
//for loop
let n=10;
for (let i = 1; i <= n; i++) {
  console.log(i);
}
//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//do while
do {
  console.log(i);
  i++;
} while (i <= n);

const students = ["Diba", "Hoimanty", "Arpa", "Maisha"];

for (const i of students) {
  console.log(i);
}