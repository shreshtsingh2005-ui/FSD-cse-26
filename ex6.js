const a=[1,2,3,4];
const b=[5,6,7,8];
const c=[...a,...b];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
const student={
    name:"shresht",
    age: 22,
    branch:"cse"
}

const newstudent={
    ...student,branch:"it"
}
console.log("student=",student);
console.log("newstudent=",newstudent);

