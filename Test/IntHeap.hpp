#pragma once
#include <iostream>

/*
Implementation of a MaxHeap for Integers
*/


class IntHeap{
  public:
    IntHeap();
    void insert(int num);
    int extractMin();
    bool isEmpty();
    ~IntHeap();
  private:
    void bubbleUp(int num);
    void trickleDown(int num);
    void increaseHeapLevel();
    //void shrinkHeap();
  private:
    int _count;
    int _maxCount;
    int* _array;
};
