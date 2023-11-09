const doubleIt=function(num){
    return num*2;
}
const result=doubleIt(5);
console.log(result);

//ES6
const doubleIt2=num=>num*2;
const result2=doubleIt2(10);
console.log(result2);

const add=(x,y)=>x+y;
const result3=add(10,5);
console.log(result3);

const give5=()=>5;
const result4=give5();
console.log(result4);

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
const result5=doMath(10,5);
console.log(result5);