
//to slow
/*
function num_of_divisors(number){
  let count = 1;
  for(let i = 1;i < number; i++){
    if (number % i == 0) {
      count = count + 1;
    }
  }
  return count;
}*/

function num_of_divisors(number) {
  let count_of_div = 1;
  let is_in = 1;
  for (let i = 2; i <= number; i++) {
    while (number%i == 0) {
      number = number / i;
      is_in = is_in + 1;
    }
    count_of_div = count_of_div * is_in;
    is_in = 1;
  }
  return(count_of_div);
}




let i = 1;
let trinum = 0;
while(num_of_divisors(trinum) <= 500){
  console.log(trinum,num_of_divisors(trinum));
  trinum = trinum + i;
  i = i + 1;
}
console.log(trinum,num_of_divisors(trinum),i);

/*
let num = 0;
while(num_of_divisors(num) <= 500){
  console.log(num_of_divisors(num));
  num = num + 1;
}
*/
