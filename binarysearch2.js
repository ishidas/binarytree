'use strict';
var primeNums = [2,3,4,5,11,13,17,19,23,29,31]


var min;
var mid;
var max;

function search(num, array){
  //indecies
  min = 0;
  mid = Math.floor(array.length/2);
  max = array.length - 1;
  //base case
  if(!array.length)
  return false;

  if(array[mid] === num)
  return array[mid];

  if(array[mid] > num)
    max = Math.floor(array.length/2) - 1
    mid = Math.floor((max + 1)/2);
    if(array[max] === num || array[mid] === num)
      return array[max];
    console.log('max changed : ' + max)
    console.log('mid changed : ' + mid)
    var result = search(num, array)
    return result;

  if(array[mid] < num)
    min = Math.floor(array.length/2) + 1
    mid = ((array.length - 1) - min)/2 + min
    if(array[min] === num || array[mid] === num)
      return array[min];
    console.log('min changed : ' + min)
    var result2 = search(num, array)
    return result2;

}

var final = search(4, primeNums);

console.log('Here is the result : ' + final);
