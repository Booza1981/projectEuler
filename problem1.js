var SumOfMultiplesof3And5 = function(n) {
  var multiples = 0;

  for (i = 3; i < n; i++) {
    if (i % 3 === 0) {
      multiples += i;
    }
    else if (i % 5 === 0) {
      multiples += i;
   }
    else {
    }   
  }

  console.log(multiples);  
}

SumOfMultiplesof3And5(1000)