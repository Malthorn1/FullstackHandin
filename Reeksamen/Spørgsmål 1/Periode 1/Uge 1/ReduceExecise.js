var all= ["Lars", "Peter", "Jan", "Bo"];



/*--------------------execise c-------------------------*/
var age = 0;
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

for(i = 0; i <= members.length-1; i++) {
    age += members[i].age / members.length
}

let reducer = members.reduce((acc, member, idx, arr) =>
    acc + member.age / arr.length, 0);

console.log("Average age using loop");
console.log(age);
console.log("Using reduce");
console.log(reducer);