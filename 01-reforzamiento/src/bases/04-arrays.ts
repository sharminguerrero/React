const myArray:number[]  = [1, 2, 3, 4, 5, 6];
//const myArray:(number| string)[]  = [1, 2, 3, 4, 5, 6];

const myArray2 = structuredClone(myArray);
//const myArray2 = [...myArray];
myArray2.push(7);
myArray.push(11);

console.log(myArray, myArray2);

// for (const myNumber of myArray){
//     console.log(myNumber + 10);
// } 
