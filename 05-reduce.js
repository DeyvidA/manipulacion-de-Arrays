const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++){
    const element = totals[index];
    sum += element;
}
console.log(sum);

const array = [1,1,1,1,1];
const rta = array.reduce((sum, element) => sum + element, 0);
console.log('rta', rta);