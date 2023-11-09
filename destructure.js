const person={name:'Tajwone',Age:21,job:'Chairman of bekar association',address:"Earth"};



console.log(person.address);
const add=person.address;
console.log(add);
const {name,Age,address}=person;
console.log(name,Age);
//for array
const friends=['salman','amir','shahrukh'];
const [frst]=friends;
const [first, ...restfriends]=friends;
console.log(frst);
console.log(first, ...restfriends);
//complex object
const complexObject={
    name:"boltu",
    info:{
        address:"bangladesh",
        leader:"ertugrul"
    }
}
const {leader}=complexObject.info;

console.log(leader);