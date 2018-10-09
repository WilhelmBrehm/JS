let index = 2;
let primes = [];
let primecount = 0;
let is_prime = true;

while(index < 2000000){
  is_prime = true;
  for(let i = 0; i < primecount; i++){
    if(index % primes[i] == 0){
      is_prime = false;
      break;
    }
  }

  if(is_prime == true){
    primes.push(index);
    primecount = primecount +1;
    console.log(primes[primecount-1]);
  }
  index++;
}

let sum = 0;
for (var i = 0; i < primes.length; i++) {
  sum = sum + primes[i];
}
console.log(sum);
