/* https://projecteuler.net/problem=3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Answer 6857
*/



var primeFunctions = function(target) {

  var primeFactors = []   /* An array for logging all prime factors */

  var isItPrime = function(n) { /* A function to test if an input ("n") is a prime number or not.  If it is it will push the number to the primeFactors array */

    var i = 2;

    var notAPrime = false;

    do {
      if (n % i === 0) {
        notAPrime = true;
        i++
      } else {
        i++;
      }
    }
    while (i < n);

    if (notAPrime === false) primeFactors.push(n);
  }

  var f = 2;

  do {
    if (target % f === 0) {
      isItPrime(f);
      f++;
    } else {
      f++;
    }
  }
  while (f < target);

  console.log(primeFactors);
}

primeFunctions(13195);
