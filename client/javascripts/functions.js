// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = "";
   if(n % 3 == 0){
    result = `${result}Bit`;
   }
   if(n % 5 == 0){
    result = `${result}Bat`;
   }
   if(n % 7 == 0){
     result = `${result}Bot`;
   }
   if(n % 3 != 0 && n % 5 != 0 && n % 7 != 0){
     result = `${result}Not`;
   }

   return result;
};

let findAllbitBatBotOrNots1 = (arr) => {
  return arr.map(x => `${x}:`+bitBatBotOrNot(x))
};

let findAllbitBatBotOrNots2 = (arr) => {
   let result = []
   for(x in arr){
     result.push(arr[x]+": "+bitBatBotOrNot(arr[x]))
   }
   return result;
};

let findAllbitBatBotOrNots3 = (arr) => {
  let result = []
  for(x of arr){
    result.push(x+": "+bitBatBotOrNot(x))
  }
  return result;
};

let findAllbitBatBotOrNots4 = (arr) => {
  let result = []
  arr.forEach(bitBatBotOrNot);
  for(x of arr){
    result.push(x+": "+bitBatBotOrNot(x))
  }
  return result;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
