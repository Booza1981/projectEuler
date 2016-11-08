/* 
https://projecteuler.net/problem=2
Problem 2. By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
*/

var sumOfEvenFibbs = function(n) {
  var x = 1;
  var y = 2;
  var z = 0;
  var sum = 0;

  while (x <= n) {
    if (x % 2 === 0) {
      sum += x;
    }
    z = x + y;
    x = y;
    y = z;
  }
  return sum;
};

console.log(sumOfEvenFibbs(4000000));