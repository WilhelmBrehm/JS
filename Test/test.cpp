#include<string>
#include "Stack.cpp"
#include "PrimeNumberFunctions.cpp"


int main(){
  Stack<std::string> s;
  s.push("world");
  s.push("hello");
  std::cout << s.pop() << std::endl;
  std::cout << s.pop() << std::endl;
  std::vector<int> primes = Erathosthesis(100);
  std::cout << primes.size();
}
