#include "IntHeap.cpp"


int main() {
  IntHeap h;
  int testNumber;
  std::cin >> testNumber;
  while (testNumber != 1) {
    if (testNumber%2==0) {
      testNumber = testNumber/2;
    }else{
      testNumber = testNumber*3+1;
    }
    std::cout << testNumber << std::endl;
    h.insert(testNumber);
  }

  while (!h.isEmpty()) {
    std::cout << h.extractMin() << std::endl;
  }


  return 0;
}
