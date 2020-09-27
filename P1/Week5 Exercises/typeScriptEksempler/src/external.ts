import * as _ from "lodash"

////////////////////////////////////////////
/*  HUSK
npm install lodash 
npm install @types/lodash
*/
//////////////////////////


let numbers: number[] = [1,2,4,5,6]; 

let shuffled = _.shuffle(numbers); 
let reversed: Array<number> = _.reverse(shuffled); 

console.log(reversed)