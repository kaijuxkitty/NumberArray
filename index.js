//create prompt for user number input
let input = prompt ("Enter your numbers seperated by commas")
//turn user input into array
let numberArray = input.split(',');
//convert number string to numbers
numberArray = numberArray.map(Number);
//create functions for the following 
//getLength
function getLength(numberArray) {
    return numberArray.length;
} 
//getSum
function getSum(numberArray) {
  let sum= 0;
  for(let i=0; i<numberArray.length;i++) {
    sum+=numberArray[i];
  } 
      return sum;
}
  //getMean
  //function getMean(numberArray) {
  //  if(numberArray.length===0); {
  //  return 0;
     //cant get this one!
  
    //getMin
  function getMin(numberArray) {
    return Math.min(...numberArray);
  }
  //getMax
  function getMax(numberArray) {
    return Math.max(...numberArray)
  }
  //getRange
  function getRange(numberArray) {
    return getMax(numberArray)-getMin(numberArray);
  } 
  console.log(getRange(numberArray));
  //getEvens
  function getEvens(numberArray) {
    let evens=[];
    for (let i=0; i<numberArray.length;i++){
        if (numberArray[i] % 2===0) {
            evens.push(numberArray[i]);
        }
       }    
   return evens;
} 
  console.log(getEvens(numberArray));
  //getOdds
