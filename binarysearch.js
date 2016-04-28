'use strict';
//**************************************************
// Binary Search using recursion applied to an array
//of sorted prime numbers.
//**************************************************
var primeNums = [2,3,4,5,11,13,17,19,23,29,31]

function search (num, array){
  var mid = Math.floor((array.length-1)/2);
  console.log('Mid : ' + mid)
  console.log('Array : ' + array)
  console.log('Num : ' + num)
  if(!array.length)
  return false;

  if(array[mid] == num)
  return array[mid];

  if(array[mid] > num)
  var result = search(num, array.slice(0, mid))
  return result;

  if(array[mid] < num)
  var result2 = search(num, array.slice(mid+1))
  return result2;
}

var finalResult = search(4, primeNums);

console.log('Here is result ' + finalResult)
