const ages=[12,13,14,15];
const ages2=[12,13,14,15];
const ages3=[12,13,14,15];

const totalAges=ages.concat(ages2).concat([20]).concat(ages3);
const totalAges2=[...ages,...ages2,...ages3,5]; //ES6
console.log(totalAges);
console.log(totalAges2);


const TakaPoysha=[10,20,30,500,300];
const maximum=Math.max(...TakaPoysha);
console.log(maximum);