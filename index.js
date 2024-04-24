"use strict"
//Problem 1
// function iterativeOddSumTo(number){
//     let sum = 0;
//     for(let i=1; i<=number; i++){
//         i%2===0 ? sum+=0 : sum+=i;
//     }
//     return sum;
// }
// console.log(iterativeOddSumTo(1)) ;
// console.log(iterativeOddSumTo(9)) ;
// console.log(iterativeOddSumTo(20));

//Problem 2
// function recursiveOddSumTo(number) {
// if (number <=1){
// return number;
// } else if (number%2 !== 0) {
//     return number + recursiveOddSumTo(number-2);
// }
// else {
//     return recursiveOddSumTo(number-1) };
// };
    
//     console.log(recursiveOddSumTo(1));
//     console.log(recursiveOddSumTo(9));
//     console.log(recursiveOddSumTo(10));

//Problem 3

const isXOEqual = (str) => {
    const lowerStr = str.toLowerCase();
    let numX=0;
    let numO = 0;
for (let i=0; i<=str.length; i++){
    if (lowerStr[i]==='x'){
        numX++;
    } else if(lowerStr[i]==='o'){
        numO++;
    } else {
    }
};
 return numO === numX 
}

console.log(isXOEqual("ooxx")) 
console.log(isXOEqual("xooxx"))
console.log(isXOEqual("ooxXm"))
console.log(isXOEqual("zpzpzpp"))
console.log(isXOEqual("zzoo"))