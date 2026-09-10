const num=[1,2,3,4,5,6,7,8,9];
//const a=num[0];
//const b=num[1];
//const c=num[2];
//const d=num[3];
//const e=num[4];
const [a,b,c,d,e]=num;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
console.log("d=",d);
console.log("e=",e);
const student={
    name:"shresht",
    age:21,
    branch:"cse"
}
//const name=student.name;
//const age=student.age;
//const branch=student.branch;


const{name,age,branch}=student;

console.log('my name shresht');
console.log("age=",age);
console.log("branch=",branch);