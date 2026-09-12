function regularFunction(){
    console.log("Regular function");
}
const arrowFunction =() =>{
    console.log("Arrow function");
};
regularFunction();
arrowFunction();
//object literal er property create 
//property gulo key : value , syntex
const person ={
    name:"Diba chowdhury",
    id:1166,
    regularFunction:function regularFunction(){
        console.log(this.name);
        console.log(this.id);
    },
    arrowFunction : ()=>{
        console.log(this.name);
        console.log(this.id);
    },
};
person.regularFunction();
person.arrowFunction();



const person1 ={
    name:"Ruhi chowdhury",
    id:1177,
    regularFunction:function regularFunction(){
        console.log(this.name);
        console.log(this.id);

     const arrowFunction = ()=>{
        console.log(this.name);
        console.log(this.id);
    };
    arrowFunction();
},
};
person1.regularFunction();
  //implicit return
const add=(a,b)=>a+b;
console.log(add(4,5));
const mul=(a,b)=>a*b;
console.log(mul(4,5));
const div=(a,b)=>a/b;
console.log(div(20,5));
const sub=(a,b)=>a-b;
console.log(sub(4,5));
//explicit return
const add1=(a,b)=>{
    return a+b;
};
console.log(add(4,5));

const mul1=(a,b)=>{
    return a*b;
}
console.log(mul(4,5));

const div1=(a,b)=>{
    return a/b;
}
console.log(div(20,5));

const sub1=(a,b)=>{
    return a-b;
}
console.log(sub(4,5));


