const stu=["Diba chowdhury","Hoimanty Devi","Adity Banik"];
const marklist=[80,78,90];
const getgrade = (marks) => {
  if (marks >= 80) {
    return "A+";
  } else if (marks >= 70) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
};

for(let i=0;i<stu.length;i++){
    const get=getgrade(marklist[i]);
 console.log(`Name : ${stu[i]},Marks: ${marklist[i]}, Grade: ${get}`);
}