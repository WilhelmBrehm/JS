#include "IntHeap.hpp"

#define say std::cout <<


IntHeap::IntHeap() :  _count(0), _maxCount(1){
  _array = new int[_maxCount];
  say "Hello, I'am your new Heap" << std::endl;
}

void IntHeap::insert(int num){

  if(_count >= _maxCount){
    increaseHeapLevel();
  }

  _array[_count] = num;
  bubbleUp(_count);

  _count++;
}

int IntHeap::extractMin(){
  int tempResult = _array[0];
  _count--;
  _array[0] = _array[_count];
  trickleDown(0);
  return tempResult;
}


bool IntHeap::isEmpty(){
  if (_count == 0) {
    return true;
  } else {
    return false;
  }
}

void IntHeap::increaseHeapLevel(){
  int oldMaxCount = _maxCount;
  _maxCount = _maxCount*2+1;
  say "I increase my capacity to: " << _maxCount << std::endl;
  int* tempArray = new int[_maxCount];
  for (int i = 0; i < oldMaxCount; i++) {
    tempArray[i] = _array[i];
  }

  delete[] _array;
  _array = tempArray;
}

void IntHeap::bubbleUp(int num){

  int parentPosition = (num-1)/2;
  if(_array[parentPosition] <= _array[num] && num != 0){
    int temp = _array[parentPosition];
    _array[parentPosition] = _array[num];
    _array[num] = temp;
    bubbleUp(parentPosition);
  }
}

void IntHeap::trickleDown(int num){
  if (num*2+1 >= _maxCount) {
    return;
  }
  //folgender Code ist ein bisschen schwer zu lesen
  // Sinn ist einfach nur die Spezialfälle auszuschließen
  // dass Eintäge zwar initialisiert sind, aber keinen Wert zugewiesen haben
  enum TrickleAction {
    swapLeftParent,
    swapRightParent,
    doNothing
  };
  TrickleAction trickle = doNothing;

  int parent = _array[num];
  int left = _array[num*2+1];
  int right = _array[num*2+2];

  if (num*2+2 < _count) {
    if (left >right){
      if(left > parent){
        trickle = swapLeftParent;
      }else{
        return;
      }
    }else{
      if(right>parent){
        trickle = swapRightParent;
      }else{
        return;
      }
    }
  }else if(num*2+2 > _count) {
    return;
  }else if(num*2+2 == _count) {
    if(left > parent){
      trickle = swapLeftParent;
    }else{
      return;
    }
  }

  switch (trickle) {
    case swapLeftParent:
      _array[num] = left;
      _array[num*2+1] = parent;
      trickleDown(num*2+1);
      break;
    case swapRightParent:
      _array[num] = right;
      _array[num*2+2] = parent;
      trickleDown(num*2+2);
      break;
    default:
      break;
  }
}

IntHeap::~IntHeap(){
  say "Goodbye";
  delete[] _array;
}
