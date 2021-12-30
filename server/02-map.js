const letter = ['a', 'b', 'c'];


const newArray = letter.map(item => item + "++");
// const newArray = [];
// for (let index = 0; index < letter.length; index++){
//     const element = letter[index];
//     newArray.push(element + "++");

// }

console.log('original', letter);
console.log('new',newArray);