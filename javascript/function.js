function greet() {
  console.log("Hello!");
}
greet();
function greet(name = "Student") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("Bill Gates");



function greetUser(greetFunction, name) {
  greetFunction(name);
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

greetUser(sayHello, "Steve Jobs");