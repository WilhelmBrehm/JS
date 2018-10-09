#include <vector>
#include <iostream>

//Sieve of Erathosthesis
/*
gives for an limit integer all primenumbers
smaller than limit back
*/
std::vector<int> Erathosthesis(int limit){

  //preparation
  if(limit < 2){
    return std::vector<int>();
  }

  bool* numbers = new bool[limit];
  for (int i = 0; i < limit; i++) {
    numbers[i] = true;
  }
  int p = 2;

  //marking not primenumbers(actual sieve)
  while(numbers[p] == true){
    int marker = p*p;
    while (marker <= limit) {
      numbers[marker] = false;
      marker += p;
    }
    p++;
  }
  std::cout << "done" << '\n';

  //make primenumber vector
  std::vector<int> primes;
  for (int i = 2; i < limit; i++) {
    if (numbers[i] == true) {
      primes.emplace_back(i);
    }
  }

  delete[] numbers;
  return primes;

}
